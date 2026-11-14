
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
  "http://localhost:3000",
  "http://127.0.0.1:3000",
].filter(Boolean);

// Middleware - only once
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

app.use(express.json({ limit: "20kb" }));

// Backend test
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Contact API - save only once
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

// MongoDB connection and server start - only once
const startServer = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected:", mongoose.connection.name);

    app.listen(PORT, () => {
      console.log(`🚀 Backend running at http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("❌ Startup Error:", err.message);
    process.exit(1);
  }
};

// Call only once
startServer();
