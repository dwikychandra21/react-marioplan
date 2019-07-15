import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const projectLists = props => {
  return (
    <div className="project-list container">
      {
        props.projects ? props.projects.map(project => {
          return (
            <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectSummary project={project} />
            </Link>
          )
        }) : <p>Loading...</p>
      }
    </div>
  );
};

export default projectLists;
