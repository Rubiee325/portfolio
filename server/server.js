
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "node:dns";
import Contact from "./models/Contact.js";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://portfolio-jeyarubis-projects.vercel.app",
  "https://portfolio-l9yh8r4b5-jeyarubis-projects.vercel.app",
  "https://portfolio-quw5y0tec-jeyarubis-projects.vercel.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
].filter(Boolean);

const isAllowedVercelPreview = (origin) =>
  /^https:\/\/portfolio-[a-z0-9-]+-jeyarubis-projects\.vercel\.app$/.test(origin);

app.use(cors({
  origin: (origin, callback) => {
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      isAllowedVercelPreview(origin)
    ) {
      return callback(null, true);
    }

    console.error("Blocked CORS origin:", origin);
    return callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json({ limit: "20kb" }));

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, service, budget, timeline, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and project details are required",
      });
    }

    const saved = await Contact.create({
      name,
      email,
      service,
      budget,
      timeline,
      message,
    });

    console.log("Saved ID:", saved._id);
    console.log("Database:", mongoose.connection.name);
    console.log("Collection:", Contact.collection.name);

    const count = await Contact.countDocuments();
    console.log("Total Documents:", count);

    return res.status(201).json({
      success: true,
      message: "Project inquiry received successfully!",
    });

  } catch (err) {
    console.error("Contact save error:", err.message);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

const startServer = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected:", mongoose.connection.name);

    app.listen(PORT, () => {
      console.log(`Backend running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Startup Error:", err.message);
    process.exit(1);
  }
};

startServer();
