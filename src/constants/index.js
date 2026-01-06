// import {
//   web,
//   frontend,
//   design,
//   backend,
//   fullStack,
//   cloud,
//   html,
//   css,
//   javascript,
//   reactjs,
//   formik,
//   redux,
//   mui,
//   tailwind,
//   scss,
//   nodejs,
//   expressjs,
//   mongodb,
//   mongoose,
//   git,
//   github,
//   EC2,
//   S3,
//   vscode,
//   ChatGPT,
//   chrome,
//   mongodbCompass,
//   postman,
//   ubuntu,
//   Impress,
//   e_commerce,
//   proConnectup,
//   portfolio,
// } from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// const services = [
//   {
//     title: "Web Developer",
//     icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/web.png",
//   },
//   {
//     title: "React Developer",
//     icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/frontend.png",
//   },
//   {
//     title: "Backend Developer",
//     icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/backend.png",
//   },
//   {
//     title: "Full Stack Developer",
//     icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/fullStack.png",
//   },
// ];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Mongoose",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721286.png",
  },
];

const tools = [
  {
    name: "VS Code",
    icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png", // VS Code
  },
  {
    name: "ChatGPT",
    icon: "https://images.icon-icons.com/4252/PNG/96/chatgpt_logo_chatgpt_logo_square_green_gpt_ia_openai_icon_264977.png", // ChatGPT icon
  },
  {
    name: "Google",
    icon: "https://cdn-icons-png.flaticon.com/512/300/300221.png", // Google
  },
  {
    name: "Figma",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // Figma
  },
  {
    name: "Canva",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968701.png", // Canva
  }
];



const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Kevell Corp",
    icon: "https://img.icons8.com/color/96/web.png", // 🌐 Web Development icon
    iconBg: "#F0F8FF",
    date: "December 2023",
    points: [
      "Completed a 15-day internship focused on Web Development.",
      "Built a Task Timer web app to help users manage and track daily tasks with time logs.",
      "Designed and implemented key features including task creation, logging, and completion timers.",
    ],
  },
  {
    title: "C# and .NET Intern",
    company_name: "Zealsoft Technology Solutions",
    icon: "https://img.icons8.com/color/96/c-sharp-logo.png", // 🔷 C# logo icon
    iconBg: "#E6E6FA",
    date: "May 2024",
    points: [
      "Developed a basic Fitness Tracker application using C# and .NET framework.",
      "Implemented features like workout logging, calorie monitoring, and fitness goals.",
      "Contributed to building an intuitive UI for daily health tracking.",
    ],
  },
];



const achievements = [
  // {
  //  title: "Gold Medalist",
  //   description: "Awarded Gold Medal for Academic Excellence (2023–2024).",
  //   icon: "https://tse3.mm.bing.net/th/id/OIP.lE8EkH2h2ebxsAsS_MazVQHaHa?pid=Api&P=0&h=180",  // or wherever your icon is
  //   link: "https://www.linkedin.com/posts/jeyarubi-m-37891b280_goldmedal-academicexcellence-computerscience-activity-7319719803902914561-5khc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER6yUwBDP6-ywqS6tmU-x__dUMSGqAPAwM",
  // },
  {
    title: "LeetCode Problem Solver",
    description:
      "Solved 100+ coding problems on LeetCode, boosting problem-solving and algorithmic thinking.",
    icon: "https://tse2.mm.bing.net/th/id/OIP.cNJCBLV2Loe3Tqwu6sHTkAHaHa?pid=Api&P=0&h=180",
    link: "https://leetcode.com/u/Rubiiee/",
  },
  {
    title: "SkillRack Challenges",
    description:
      "Solved 870+ coding problems on SkillRack, strengthening logic, patterns, and debugging skills.",
    icon: "https://tse3.mm.bing.net/th/id/OIP.SQ4ausTfEz4qATzj7K63PAHaHa?pid=Api&P=0&h=180",
    link: "http://www.skillrack.com/profile/410808/732efbcca5618fe76d8cebe6148eda5c9c7f2e6e",
  },
  {
  title: "Academic Excellence Gold Medal (2023-2024)",
  description:
    "Recognized with the Gold Medal for securing top rank and demonstrating exceptional academic excellence in the 2023–2024 academic year.",
  icon: "https://tse3.mm.bing.net/th/id/OIP.YUhSamv0FHCMBLPBaCNbPwHaE8?pid=Api&P=0&h=180",
  link: "https://www.linkedin.com/posts/jeyarubi-m-37891b280_goldmedal-academicexcellence-computerscience-activity-7319719803902914561-5khc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER6yUwBDP6-ywqS6tmU-x__dUMSGqAPAwM",
}

];



const projects = [
  {
    name: "FitTrack",
    description:
      "A full-featured fitness tracker and meal planner built using Django. Includes personalized dashboards, water intake tracking, workout logging, BMI calculator, diet plans, and recipe suggestions with clean UI and animations.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://tse1.mm.bing.net/th/id/OIP.UBC7ArksgdESwemqtgvJxwHaHB?pid=Api&P=0&h=180", // 🔁 Replace with your image
    alt: "FitTrack",
    source_code_link: "https://github.com/Rubiee325/fittrack",
    live_link: "", // if deployed, add live link
  },
  {
    name: "Faculty Career Management",
    description:
      "A web platform to manage faculty career profiles, achievements, publications, and course tracking. Designed for academic institutions to streamline faculty performance data.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "https://tse3.mm.bing.net/th/id/OIP.pD58Xeo-pSZ0Gl0Ew15q5wHaGK?pid=Api&P=0&h=180", // 🔁 Replace with your image
    alt: "Faculty Career Management",
    source_code_link: "https://github.com/Rubiee325/Faculty-career-Advancement",
    live_link: "", // optional
  },
  {
    name: "Bail Reckoner",
    description:
      "An informational and utility web tool built for legal aid and awareness, designed to guide users through the bail eligibility process with form-based logic and simplified legal references.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://tse4.mm.bing.net/th/id/OIP.UDwt0kmkJGIbnymppbiwEAHaE8?pid=Api&P=0&h=180", // 🔁 Replace with your image
    alt: "Bail Reckoner",
    source_code_link: "https://github.com/yourusername/bail-reckoner",
    live_link: "", // optional
  },
  {
    name: "Student Management System-CRUD ",
    description:
      "An informational and utility web application designed for managing student records, enabling administrators to create, view, update, and delete student details through form-based workflows, with structured data handling and simplified user interactions.",
    tags: [
      {
        name: "DotNet",
        color: "blue-text-gradient",
      },
      {
        name: "Next JS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: "https://tse3.mm.bing.net/th/id/OIP.-TVi_DYsOiBXpHeGx_WRuwHaC9?pid=Api&P=0&h=180", // 🔁 Replace with your image
    alt: "Student Management ",
    source_code_link: "https://github.com/Rubiee325/student-management-system",
    live_link: "", // optional
  },
];


export {
  navLinks,
  technologies,
  experiences,
  achievements,
  projects,
  tools,
};
