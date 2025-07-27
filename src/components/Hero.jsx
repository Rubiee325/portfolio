import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ParticlesContainer from "./ParticlesContainer";
import { Avatar, useMediaQuery } from "@mui/material";

const Hero = () => {
  const isSmallScreen = useMediaQuery("(max-width:640px)");

  return (
    <section
      className={`flex-between-center relative mx-auto h-screen w-full flex-col`}
    >
      <ParticlesContainer />

      {/* Centered Title and Paragraph */}
      <div
        className={`top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-col items-center justify-center gap-5`}
      >
        <motion.div variants={textVariant()} className="relative text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Jeyarubi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Full Stack Web Applications using{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">MERN Stack</span>
          </p>

          {/* Glowing Circle */}
          <div className="relative mt-6 flex justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="absolute top-10 left-1/2 -translate-x-1/2 h-[120px] w-[120px] rounded-full bg-[#915EFF] blur-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Avatar Image */}
      <motion.div
        variants={textVariant()}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="z-[1] mt-10"
      >
        <Avatar
          alt="My Image"
          src="/myImage1.png"
          sx={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          }}
        />
      </motion.div>

      {/* Scroll Down Arrow */}
      <div className="flex-center-center mb-40 w-full">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
