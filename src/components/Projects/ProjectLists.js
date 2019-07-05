import React from "react";
import ProjectSummary from "./ProjectSummary";

const projectLists = props => {
  return (
    <div className="project-list container">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default projectLists;
