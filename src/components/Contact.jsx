import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";
import { Button } from "@mui/material";
import { Email, LinkedIn, GitHub, ArrowOutward } from "@mui/icons-material";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/contact";
const initialForm = {
  name: "",
  email: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};
const fieldClassName =
  "w-full rounded bg-gray-800 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";
const labelClassName = "text-sm font-medium text-secondary";

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending your project inquiry...");
    setIsSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Unable to send your inquiry.");
      }

      setStatus("✅ Thanks! Your project inquiry has been sent.");
      setForm(initialForm);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("❌ We couldn't send your inquiry. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div variants={textVariant()} className="mb-8 text-center md:text-left">
        <p className={styles.sectionSubText}>Have a project in mind?</p>
        <h3 className={styles.sectionHeadText}>Let&apos;s work together.</h3>
        <p className="mt-3 max-w-2xl text-secondary">
          Tell me a little about your project. Share your goals, budget, and ideal timeline, and I&apos;ll get back to you about the next steps.
        </p>
      </motion.div>

      <div className="flex flex-col-reverse gap-10 overflow-hidden md:flex-row">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 0.7)}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClassName}>
                Your name
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
                  required
                  className={`${fieldClassName} mt-2`}
                />
              </label>
              <label className={labelClassName}>
                Email address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={254}
                  required
                  className={`${fieldClassName} mt-2`}
                />
              </label>
            </div>

            <label className={labelClassName}>
              What do you need help with?
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className={`${fieldClassName} mt-2`}
              >
                <option value="" disabled>Select a service</option>
                <option value="Website design and development">Website design and development</option>
                <option value="Frontend development">Frontend development</option>
                <option value="Backend or API development">Backend or API development</option>
                <option value="Full-stack web application">Full-stack web application</option>
                <option value="Website improvement or maintenance">Website improvement or maintenance</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClassName}>
                Approximate budget
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  required
                  className={`${fieldClassName} mt-2`}
                >
                  <option value="" disabled>Select a budget range</option>
                  <option value="Under $250">Under $250</option>
                  <option value="$250–$500">$250–$500</option>
                  <option value="$500–$1,000">$500–$1,000</option>
                  <option value="$1,000+">$1,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>
              <label className={labelClassName}>
                Ideal timeline
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  required
                  className={`${fieldClassName} mt-2`}
                >
                  <option value="" disabled>Select a timeline</option>
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="Within 2–4 weeks">Within 2–4 weeks</option>
                  <option value="Within 1–3 months">Within 1–3 months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </label>
            </div>

            <label className={labelClassName}>
              Project details
              <textarea
                name="message"
                placeholder="What are you building, who is it for, and what would make it successful?"
                value={form.message}
                onChange={handleChange}
                rows={5}
                maxLength={5000}
                required
                className={`${fieldClassName} mt-2`}
              />
            </label>

            <motion.button
              variants={fadeIn("up", "spring", 0.6, 0.6)}
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-lg bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send project inquiry"}
            </motion.button>
          </form>

          {status && (
            <motion.p
              role="status"
              aria-live="polite"
              variants={fadeIn("up", "spring", 0.7, 0.6)}
              className="mt-3 font-medium text-green-400"
            >
              {status}
            </motion.p>
          )}

          <motion.div
            variants={fadeIn("up", "spring", 0.8, 0.6)}
            className="mt-6 flex flex-wrap gap-2"
          >
            <a href="mailto:jeyarubim@gmail.com">
              <Button variant="outlined" endIcon={<Email />}>Email</Button>
            </a>
            <a href="https://www.linkedin.com/in/jeyarubi-m-37891b280/" target="_blank" rel="noopener noreferrer">
              <Button variant="outlined" endIcon={<LinkedIn />}>LinkedIn</Button>
            </a>
            <a href="https://github.com/Rubiee325" target="_blank" rel="noopener noreferrer">
              <Button variant="outlined" endIcon={<GitHub />}>GitHub</Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.3, 0.7)}
          className="flex items-center justify-center md:flex-1"
        >
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.0xHYwAogMpynFgZHzMGQRQHaD2?pid=Api&P=0&h=180"
            alt="Let's discuss your project"
            className="h-full w-full rounded-xl object-contain shadow-lg"
          />
        </motion.div>
      </div>

      <motion.div variants={fadeIn("up", "spring", 0.4, 0.7)} className="ml-5 mt-8">
        <h1 className="my-3 text-xl font-semibold text-slate-50">Thanks for scrolling.</h1>
        <a href="/Jeyarubi-resume (4).pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="outlined" endIcon={<ArrowOutward />}>Resume</Button>
        </a>
      </motion.div>
      <hr className="ml-2 mt-4" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
