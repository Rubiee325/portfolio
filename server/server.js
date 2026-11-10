import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Contact from "./models/Contact.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
].filter(Boolean);

const startServer = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/rubi";
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB Connected:", mongoose.connection.name);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" }));

app.get("/", (req, res) => {
  res.send("✅ Backend is running");
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

    await Contact.create({ name, email, service, budget, timeline, message });

    return res.status(201).json({
      success: true,
      message: "Project inquiry received successfully!",
    });
  } catch (err) {
    console.error("❌ Error saving contact:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

startServer();
