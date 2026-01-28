import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";
import { Button } from "@mui/material";
import { Email, LinkedIn, GitHub, ArrowOutward } from "@mui/icons-material";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const res = await fetch(
      "https://portfolio-khua.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();

    if (data.success) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Try again.");
    }
  } catch (error) {
    console.error(error);
    setStatus("❌ Server error. Try again later.");
  }
};




      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <>
      {/* Section Title */}
      <motion.div variants={textVariant()} className="mb-8 text-center md:text-left">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row gap-10 overflow-hidden">
        {/* Left: Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 0.7)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <motion.input
              variants={fadeIn("up", "spring", 0.3, 0.6)}
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.input
              variants={fadeIn("up", "spring", 0.4, 0.6)}
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.textarea
              variants={fadeIn("up", "spring", 0.5, 0.6)}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></motion.textarea>
            <motion.button
              variants={fadeIn("up", "spring", 0.6, 0.6)}
              type="submit"
              className="mt-2 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </motion.button>
          </form>

          {status && (
            <motion.p
              variants={fadeIn("up", "spring", 0.7, 0.6)}
              className="mt-2 text-green-400 font-medium"
            >
              {status}
            </motion.p>
          )}

          {/* Social Buttons */}
          <motion.div
            variants={fadeIn("up", "spring", 0.8, 0.6)}
            className="flex flex-wrap gap-2 mt-6"
          >
            <a href="mailto:jeyarubim@gmail.com">
              <Button variant="outlined" endIcon={<Email />}>
                Email
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/jeyarubi-m-37891b280/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outlined" endIcon={<LinkedIn />}>
                LinkedIn
              </Button>
            </a>
            <a
              href="https://github.com/Rubiee325"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outlined" endIcon={<GitHub />}>
                GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          variants={slideIn("right", "tween", 0.3, 0.7)}
          className="md:flex-1 flex justify-center items-center"
        >
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.0xHYwAogMpynFgZHzMGQRQHaD2?pid=Api&P=0&h=180"
            alt="contact-us"
            className="h-full w-full object-contain rounded-xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Resume Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.7)}
        className="mt-8 ml-5"
      >
        <h1 className="my-3 text-xl font-semibold text-slate-50">
          Thanks for scrolling.
        </h1>
       <a
  href="/Jeyarubi-resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outlined" endIcon={<ArrowOutward />}>
    Resume
  </Button>
</a>

      </motion.div>
      <hr className="ml-2 mt-4" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
