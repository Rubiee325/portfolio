import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies, tools } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useMediaQuery } from "@mui/material";

const About = () => {
  const isSmallScreen = useMediaQuery("(max-width:587px)");
  const isLargeScreen = useMediaQuery("(min-width:1248px)");

  return (
    <>
      {/* Overview Title and Paragraph - Centered */}
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center text-center"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mx-auto mt-4 max-w-3xl text-center text-[17px] leading-[30px] text-secondary"
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React, Node.js, Express.js and MongoDB. I'm
        a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Skills Section */}
      {/* Skills Section */}
<div className="flex-center-center mt-20 flex-col">
  <h3 className={`${styles.sectionHeadText} marker`}>Skills</h3>
  <div className="mt-2 flex flex-wrap justify-center gap-10">
    {technologies.map((item, i) => (
      <div key={i} className="flex-around-center w-[80px] flex-col">
        <img src={item.icon} width="100%" alt={item.name} />
        <p className="text-center">{item.name}</p>
      </div>
    ))}
  </div>
</div>

{/* Tools and Software Section */}
<div className="flex-center-center mt-20 flex-col">
  <h3 className={`${styles.sectionHeadText} marker`}>Tools and Software</h3>
  <div className="mt-2 flex flex-wrap justify-center gap-10">
    {tools.map((item, i) => (
      <div key={i} className="flex-around-center w-[80px] flex-col">
        <img src={item.icon} width="100%" alt={item.name} />
        <p className="text-center">{item.name}</p>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default SectionWrapper(About, "about");
