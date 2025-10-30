import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { JSX, useState } from "react";
import { Project } from "../..";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const isButtonDisabled = visibleCount >= projects.length;

  return (
    <section id="projects-section">
      <h1 className="first-header first-header--center">
        <span>02. </span>Projects
      </h1>
      <div className="projects-container">
        {projects.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <button
        onClick={handleLoadMore}
        disabled={isButtonDisabled}
        className="btn btn-load"
      >
        {isButtonDisabled ? "No more projects" : "Load More"}
      </button>
    </section>
  );
}
