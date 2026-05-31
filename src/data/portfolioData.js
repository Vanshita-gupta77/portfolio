import {
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
  FaWindows,
} from "react-icons/fa";
import {
  SiAngular,
  SiCsharp,
  SiDotnet,
  SiExpress,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiPython,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { MdEmail, MdLocalPhone } from "react-icons/md";

export const profile = {
  name: "Vanshita Gupta",
  title: ".NET Full Stack Developer",
  headline:
    "Full-stack developer experienced in .NET, Angular, React, REST APIs, SQL databases, Azure deployments, and production-ready software maintenance.",
  summary:
    "I build and maintain full-stack web applications with C#, .NET, ASP.NET, Angular, React, SQL Server, MySQL, MongoDB, Azure, and DevOps-focused delivery practices.",
  about:
    "I am a .NET full-stack developer with experience across software development, debugging, deployment, feature updates, and system lifecycle collaboration. My work includes building and modernizing web applications with C#, .NET Core, ASP.NET, Angular, React, RESTful APIs, Entity Framework, MVC, Web API, SQL Server, MySQL, MongoDB, Azure, AWS, Git, and GitHub.",
  email: "guptavanshita77@gmail.com",
  phone: "+91 70788 23250",
  phoneHref: "tel:+917078823250",
  whatsappHref:
    "https://wa.me/917078823250?text=Hi%20Vanshita%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
  linkedin: "https://www.linkedin.com/in/vanshita-gupta",
  github: "https://github.com/vanshita-gupta",
  resume: "/Vanshita Gupta Resume.pdf",
  location: "India",
  availability: ".NET Full Stack Developer | C# | Angular | React | Azure | AWS",
};

export const stats = [
  { value: ".NET", label: "Core full-stack development focus" },
  { value: "Azure", label: "Deployment and DevOps pipeline exposure" },
  { value: "SQL", label: "SQL Server, MySQL, and database-backed apps" },
  { value: "React", label: "Modern frontend project experience" },
];

export const navLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Education", target: "education" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Certifications", target: "certifications" },
  { label: "Contact", target: "contact" },
];

export const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "Email", href: `mailto:${profile.email}`, icon: MdEmail },
  { label: "WhatsApp", href: profile.whatsappHref, icon: FaWhatsapp },
  { label: "Call", href: profile.phoneHref, icon: MdLocalPhone },
];

export const experiences = [
  {
    company: "Cognizant",
    role: ".NET Full Stack Developer",
    period: "March 2023 - Current",
    location: "Full-time",
    stack: ["C#", ".NET", "ASP.NET", "Angular", "REST APIs", "SQL Server", "Azure", "Git"],
    summary:
      "Coordinating software deployments, feature updates, debugging, automation, performance improvements, and production-ready releases for full-stack applications.",
    highlights: [
      "Coordinated deployments of new software, feature updates, and fixes using Angular and .NET technologies.",
      "Handled scripting tasks for debugging, automation, and development workflow support.",
      "Worked with developers to identify, troubleshoot, and remove software bugs.",
      "Corrected, modified, and upgraded software to improve functionality and performance.",
      "Collaborated across the systems development lifecycle, from requirement gathering through production releases.",
      "Updated older code bases to modern development standards to improve reliability and maintainability.",
    ],
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst Trainee",
    period: "March 2022 - October 2022",
    location: "Internship",
    stack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MySQL", "Bootstrap", "Azure DevOps"],
    summary:
      "Learned engineering best practices while building web projects, deploying on Azure, and creating DevOps pipelines for application delivery.",
    highlights: [
      "Learned software engineering process improvements, best practices, and evolving technology trends.",
      "Developed a Bank Management Portal and other projects using HTML, CSS, JavaScript, MySQL, Bootstrap, React.js, Node.js, and Express.js.",
      "Deployed projects on Azure with microservices-focused learning and delivery practices.",
      "Applied DevOps principles to automate software workflows and created pipelines using Azure DevOps.",
      "Produced projects including a Banking Portal and DevOps pipelines based on internship learning.",
    ],
  },
];

export const projects = [
  {
    name: "Alphagraphy",
    type: "Crypto Analytics App",
    description:
      "A React app for analyzing different cryptocurrencies and related news using API-driven data and modern frontend tooling.",
    points: [
      "Built with HTML, CSS, Node.js, React, Redux Toolkit, and Rapid API.",
      "Displayed cryptocurrency analytics and news in a responsive interface.",
      "Used Redux Toolkit patterns to manage application state and API responses.",
    ],
  },
  {
    name: "Weather-pro",
    type: "Weather API App",
    description:
      "A weather application for showing weather details for any city using React and OpenWeather API.",
    points: [
      "Built the user interface with HTML, CSS, JavaScript, and React.",
      "Integrated OpenWeather API for city-based weather data.",
      "Handled user input and rendered weather results in a clean frontend flow.",
    ],
  },
  {
    name: "Portfolio",
    type: "Personal Portfolio",
    description:
      "A portfolio application for showcasing work, interests, projects, and developer profile details.",
    points: [
      "Developed with HTML, CSS, JavaScript, and React.",
      "Structured sections for profile details, projects, skills, and contact information.",
      "Focused on a clean presentation for professional work and interests.",
    ],
  },
  {
    name: "Expense Tracker",
    type: "Full-Stack Tracking App",
    description:
      "A React app for recording transactions and tracking expenses with a Node.js and MongoDB backend.",
    points: [
      "Built with HTML, CSS, React, Node.js, MongoDB, and JavaScript.",
      "Created transaction records for tracking income and expenses.",
      "Connected frontend interactions with backend data storage.",
    ],
  },
  {
    name: "Query Management Portal",
    type: "Full-Stack Portal",
    description:
      "A React-based app for managing queries for both user and admin workflows.",
    points: [
      "Built with React, Node.js, Express.js, MySQL, and supporting web technologies.",
      "Created separate query-management workflows for users and administrators.",
      "Used database-backed application flows for managing and reviewing query data.",
    ],
  },
  {
    name: "Bank Management Portal",
    type: "Training Project",
    description:
      "A banking portal project developed during internship training and deployed with Azure-focused delivery practices.",
    points: [
      "Developed using HTML, CSS, JavaScript, MySQL, Bootstrap, React.js, Node.js, and Express.js.",
      "Practiced microservices-oriented deployment on Azure.",
      "Created DevOps pipelines using Azure DevOps for automated software workflows.",
    ],
  },
];

export const skills = [
  { name: "C#", icon: SiCsharp, group: "Languages" },
  { name: "Python", icon: SiPython, group: "Languages" },
  { name: "JavaScript", icon: FaJs, group: "Languages" },
  { name: "HTML5", icon: FaHtml5, group: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, group: "Frontend" },
  { name: "Bootstrap", icon: FaBootstrap, group: "Frontend" },
  { name: "React.js", icon: FaReact, group: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, group: "Frontend" },
  { name: "Angular", icon: SiAngular, group: "Frontend" },
  { name: "Redux Toolkit", icon: SiRedux, group: "Frontend" },
  { name: ".NET Core", icon: SiDotnet, group: "Backend" },
  { name: "ASP.NET", icon: SiDotnet, group: "Backend" },
  { name: ".NET Framework", icon: SiDotnet, group: "Backend" },
  { name: "Entity Framework", icon: SiDotnet, group: "Backend" },
  { name: "MVC", icon: FaDatabase, group: "Backend" },
  { name: "Web API", icon: FaDatabase, group: "Backend" },
  { name: "RESTful APIs", icon: FaDatabase, group: "Backend" },
  { name: "Node.js", icon: FaNodeJs, group: "Backend" },
  { name: "Express.js", icon: SiExpress, group: "Backend" },
  { name: "MySQL", icon: SiMysql, group: "Databases" },
  { name: "MongoDB", icon: SiMongodb, group: "Databases" },
  { name: "SQL Server", icon: SiMicrosoftsqlserver, group: "Databases" },
  { name: "Azure", icon: SiMicrosoftazure, group: "Platforms" },
  { name: "AWS", icon: FaAws, group: "Platforms" },
  { name: "Linux", icon: FaDatabase, group: "Platforms" },
  { name: "Windows", icon: FaWindows, group: "Platforms" },
  { name: "Git & GitHub", icon: FaGithub, group: "Platforms" },
  // { name: "Visual Studio", icon: SiVisualstudio, group: "Tools" },
  // { name: "Data Structures", icon: FaDatabase, group: "Tools" },
];

export const certifications = [
  "AWS Certified Cloud Practitioner - Amazon Web Services, 04/2024",
  "SQL (Basic) - HackerRank, 08/2021",
  "Programming Essentials in Python - Cisco Networking Academy, 05/2021",
];

export const education = [
  {
    school: "KIET Group of Institutions, Ghaziabad",
    degree: "Master of Computer Applications",
    period: "2020 - 2022 | 83.9%",
  },
  {
    school: "M.J.P. Rohilkhand University, Najibabad",
    degree: "Bachelor of Science (PCM)",
    period: "2017 - 2020",
  },
];
