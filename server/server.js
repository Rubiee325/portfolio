
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "node:dns";
import Contact from "./models/Contact.js";
import { Resend } from "resend";

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

app.use(
  cors({
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
  })
);

app.use(express.json({ limit: "20kb" }));

// Resend email notification
const sendContactNotification = async (contact) => {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFY_EMAIL) {
    throw new Error("Resend environment variables are missing");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>",
    to: [process.env.NOTIFY_EMAIL],
    replyTo: contact.email,
    subject: "New Portfolio Project Inquiry",

    text: `
New project inquiry received!

Name: ${contact.name}
Email: ${contact.email}
Service: ${contact.service || "Not specified"}
Budget: ${contact.budget || "Not specified"}
Timeline: ${contact.timeline || "Not specified"}

Project Details:
${contact.message}

Received at: ${contact.createdAt}
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  console.log("Resend email ID:", data?.id);
};

// Backend test
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, service, budget, timeline, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and project details are required",
      });
    }

    // Save contact in MongoDB
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

    // Email failure must not undo a successful database save
    let emailSent = false;

    try {
      await sendContactNotification(saved);
      emailSent = true;
      console.log("Email notification sent successfully");
    } catch (emailError) {
      console.error("Email notification failed:", emailError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Project inquiry received successfully!",
      emailNotification: emailSent,
    });
  } catch (err) {
    console.error("Contact save error:", err.message);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// MongoDB connection and server start
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
