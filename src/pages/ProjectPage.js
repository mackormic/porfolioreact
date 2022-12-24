import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";

import BtnGutHub from "../components/btnGitHub/BtnGitHub";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          {project.gitHubLink && <BtnGutHub link="https://github.com/" />}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
