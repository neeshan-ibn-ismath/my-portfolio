import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const PROJECTS = [
  {
    title: "Natural Language based data visualization tool",
    image: project1,
    description:
      "Developed a web app that converts natural language queries into SQL, allowing users to create customizable data visualizations from external databases for intuitive analysis.",
    technologies: ["LLM", "SQLite", "React", "Django"],
  },
  {
    title: "3D Motorbike model",
    image: project2,
    description:
      "A motorbike, along with our device prototype, was modeled and animated in Blender to demonstrate its operation and functionality.",
    technologies: ["Blender"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Monitoring and controlling theft in Motorcycles",
    image: project4,
    description:
      "Developed a device that detects motorcycle theft, alerting users via SMS and a buzzer. It also assists in maintaining speed limits and tracks the bike's location for enhanced security.",
    technologies: ["Arduino", "C", "atmel studio", "Blender", "kicad"],
  },
];

export const CONTACT = {
  address: "A36/3/2, Muruthawala, Mawanella",
  phoneNo: "+94 77  901  1225",
  email: "neeshanbinismath@gmail.com",
};
