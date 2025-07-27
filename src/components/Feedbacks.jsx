import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ index, title, description, icon, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="flex w-full max-w-4xl items-center justify-between gap-4 rounded-xl bg-black-200 p-6 shadow-lg transition hover:scale-[1.02]"
  >
    <div className="flex items-center gap-5">
      <img src={icon} alt={title} className="h-12 w-12 object-contain" />
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md bg-white px-4 py-1 text-sm font-semibold text-black transition hover:bg-gray-200"
      >
        See Now
      </a>
    )}
  </motion.div>
);

const Achievements = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div className={`rounded-2xl bg-tertiary ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Milestones</p>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 flex flex-col items-center gap-6 pb-14 ${styles.paddingX}`}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.title} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
