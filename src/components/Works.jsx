import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import githubIcon from "../assets/github.png";

// Keep projects already listed in the portfolio and include the Finance Dashboard repo.
const additionalProjects = [
  {
    name: "Finance Dashboard",
    description:
      "A finance dashboard application for organizing financial information and reviewing key metrics in a clear, interactive interface.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "Dashboard", color: "pink-text-gradient" },
    ],
    image:
      "https://tse1.mm.bing.net/th/id/OIF.HS3Qu62muHk8RCanOQgHEg?r=0&pid=Api&P=0&h=180",
    alt: "Finance Dashboard project preview",
    source_code_link: "https://github.com/Rubiee325/financedashboard",
    live_link: "",
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  alt,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1 + 0.3, 0.7)}>
      <div className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]">
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={alt || name}
            className="h-full w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} source code on GitHub`}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img src={githubIcon} alt="" className="h-3/4 w-3/4 object-contain" />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <p key={`${tag.name}-${i}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const allProjects = [...projects, ...additionalProjects];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] leading-[30px] text-secondary"
        >
          Following projects showcase my skills and experience through
          real-world examples. Each project includes a brief description with
          links to the code repository and live demo, reflecting my ability to
          build, solve, and deploy.
        </motion.p>
      </div>

      <div className="flex-around-center mt-20 flex-wrap gap-7">
        {allProjects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
