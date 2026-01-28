import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Contact from "./models/Contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// -------------------- MIDDLEWARE --------------------
app.use(cors({ origin: "*" })); // Allow all origins
app.use(express.json()); // IMPORTANT for req.body

// -------------------- TEST ROUTE --------------------
app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

// -------------------- CONTACT API --------------------
app.post("/api/contact", async (req, res) => {
  try {
    console.log("📩 API HIT");
    console.log("📩 Request Body:", req.body);

    const { name, email, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newMessage = new Contact({
      name,
      email,
      message,
    });

    await newMessage.save();

    console.log("✅ Saved to MongoDB");

    res.status(201).json({
      success: true,
      message: "Message saved successfully!",
    });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// -------------------- MONGODB CONNECTION --------------------
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected:", mongoose.connection.name);
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });

// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
