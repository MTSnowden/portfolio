import { useHref } from "react-router-dom";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import texascale from '../assets/texascale-2019.png'
import designsafe from '../assets/designsafe.jpeg'

// Innovative software developer with comprehensive experience in full stack development and consulting. Proven
// expertise in front-end design and implementation with React.js. Adept at translating complex requirements into
// functional, high-quality code.


export const HERO_CONTENT = `I am an innovative software developer with comprehensive experience in crafting
 robust and scalable web applications. With three years of hands-on experience, I have honed my skills
  in front-end technologies like React and Next.js, as well as back-end technologies like 
  Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative 
  solutions that drive business growth and deliver exceptional user experiences.`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating 
efficient and user-friendly web applications. I have worked with a variety of technologies 
including React, Next.js, Node.js, MySQL, TypeScript, Git and MongoDB. My journey in
web development began with a deep curiosity for how things work and it has evolved into a career where I 
continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy 
solving complex problems to deliver high-quality solutions. Outside of coding I enjoy staying active, 
exploring and producing music and hiking the local trails with my dog Luann.`;


export const EXPERIENCES = [
  {
    year: "2021 - 2022",
    role: "Application Development Analyst",
    company: "Accenture",
    description: `Designed and implemented dynamic web features using React.js, enhancing user engagement and functionality.
    Converted UX/UI wireframes into high-performance code, improving the visual and interactive elements of
    web applications. Conducted code reviews and collaborated with cross-functional teams, ensuring adherence to best
    practices and project requirements. Optimized existing codebases to boost performance, scalability, and reliability, contributing to more
    efficient application operations.`,
    technologies: ["Javascript", "React.js", "Next.js", "Node.js"],
  },
  {
    year: "2019 - 2020",
    role: "Software Development Trainee",
    company: "Texas Advanced Computing Center",
    description: `Developed and maintained full stack web applications connecting researchers to the Frontera
    supercomputer, utilizing React.js for user interfaces. Collaborated with interdisciplinary teams to 
    create intuitive UI features and resolve technical issues, enhancing the overall user experience.
    Assisted in designing and coding the annual company magazine and website, staying current with industry
    trends and implementing best practices.`,
    technologies: ["React", "Bootstrap", "Django CMS", "mongoDB"],
  },
  {
    year: "2018 - 2019",
    role: "Apprentice",
    company: "Austin Coding Academy",
    description: `Designed and built new site features and wireframes for the academy's website, improving user experience
    and site functionality. Developed the company landing page using React.js, contributing to the academy's 
    online presence and branding efforts. Engaged in user experience discussions and provided feedback to 
    enhance website usability and curriculum delivery. `,
    technologies: ["React", "Bootstrap", "Git", "Node.js"],
  },
 
];

export const PROJECTS = [
  {
    title: "TexaScale Magazine",
    image: texascale,
    description:
      "Researched, designed and coded website features and functionality using React.",
    URL: "https://texascale.org/2019/",
    technologies: ["HTML", "CSS", "React", "Node.js"],
    
  },
  {
    title: "DesignSafe",
    image: designsafe,
    description:
      "Designed and coded portal features for DesignSafe, a platform that enables research and educational advancements aimed at preventing natural hazard events from becoming societal disasters.",
          // URL: "https://tacc.utexas.edu/research/tacc-research/designsafe/",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Austin, Texas",
  phoneNo: "409.383.3222 ",
  email: "mtsnowden@gmail.com",
};
