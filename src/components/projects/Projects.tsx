import './Projects.css';
import ProjectCard from "./ProjectCard";
import { JSX } from 'react';

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubLink: string;
}
const projects: Project[] = [
  { id:1,
    name: "Integrating Algolia Search with WordPress Multisite",
    description: "Building a custom multisite compatible WordPress plugin...",
    technologies: ["Algolia", "WordPress", "PHP"],
    githubLink: "https://github.com/example",
 
  },
  { id:2,
    name: "Another Cool Project",
    description: "A project description here...",
    technologies: ["React", "TypeScript", "Node.js"],
    githubLink: "https://github.com/example2",
   
  },
  { id:3,
    name: "An other Cool Project",
    description: "A project description here...",
    technologies: ["React", "TypeScript", "Node.js"],
    githubLink: "https://github.com/example2",

  },
];

function Projects(): JSX.Element  {
  return (
    <div className="main-container">
      <h1 className="title"><span>02. </span>Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;