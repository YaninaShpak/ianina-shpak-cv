import './projects.scss';

import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section className="projectPage">
      <h2 className="title projectPage_title">Проекты</h2>
      <ul className="projectList listReset">
        {projects.map((el) => (
          <li className="projectItem" key={el.id}>
            <ProjectCard
              title={el.title}
              technologies={el.technologies}
              linkProject={el.linkProject}
              linkCode={el?.linkCode}
              description={el.description}
              schoolPlatform={el?.schoolPlatform}
              image={el.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
