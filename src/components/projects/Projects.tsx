import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { JSX } from "react";

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubLink: string;
}
const projects: Project[] = [
  {
    id: 1,
    name: "Mixie Pixie",
    description:
      "A website that suggests cocktail recipes based on selected ingredients.",
    technologies: ["JavaScript", "CSS", "Firebase"],
    githubLink: "https://github.com/Bina28/mixiepixie.github.io",
  },
  {
    id: 2,
    name: "Language Learning Website",
    description: "A website for learning languages with flashcards.",
    technologies: ["React", "TypeScript", "SQL Server"],
    githubLink:
      "https://languagefrontend-eqbqcbgaf2dwhgg2.northeurope-01.azurewebsites.net/",
  },
  {
    id: 3,
    name: "Sports Results Notifier",
    description:
      "Automated C# basketball stats scraper that emails daily results",
    technologies: ["C#", "Hangfire", "SQL Server"],
    githubLink:
      "https://github.com/Bina28/CodeReviews.Console.SportsResults/tree/main/SportsResultsNotifier.Bina28",
  },
  {
    id: 4,
    name: "Flashcards",
    description:
      "A console flashcard app with stack management and tracked study sessions.",
    technologies: ["C#", "SQL Server"],
    githubLink:
      "https://github.com/Bina28/CodeReviews.Console.Flashcards/tree/main/Flashcards.Bina28",
  },
  {
    id: 5,
    name: "Voice-Controlled Café Assistant",
    description: "A console voice-order café app using Azure AI",
    technologies: ["C#", " Azure's Language Services"],
    githubLink: "https://github.com/Bina28/TCSA.Console.Voice",
  },
  {
    id: 6,
    name: "Drinks Info",
    description:
      "A console app that fetches drink menu data from an external API",
    technologies: ["C#", "API"],
    githubLink:
      "https://github.com/Bina28/CodeReviews.Console.Drinks/tree/main/Drinks.Bina28",
  },
];

function Projects(): JSX.Element {
  return (
    <section id="projects">
      <h1 className="first-header first-header--center">
        <span>02. </span>Projects
      </h1>
      <div className="projects-section">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
