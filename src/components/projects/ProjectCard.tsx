import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { JSX } from "react";
import { Project } from "./Projects";



function ProjectCard ({ name, description, technologies, githubLink }: Project): JSX.Element  {
  return (
    <div className="project">
      <div className="project-icons">
        <FontAwesomeIcon icon={faFolder} className="folder-icon" />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </a>
  
      </div>
      <div className="project-content">
      <h3 className="project-name">{name}</h3>
      <p className="project-description">{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
      </div>   
    </div>
  );
}

export default ProjectCard;