import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
  service: { type: String, trim: true, maxlength: 120 },
  budget: { type: String, trim: true, maxlength: 80 },
  timeline: { type: String, trim: true, maxlength: 80 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Contact", contactSchema);
