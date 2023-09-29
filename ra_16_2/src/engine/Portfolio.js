'use strict';

import React from 'react';
import ReactDOM from 'react-dom/client';

const Portfolio = (props) => {
  const { projects } = props;

  const renderProjects = (projects1) => {
    return projects1.map((project, i) => {
      return (
        <div className="project" key={`project-${project.category}-${i}`}>
          <img src={project.img} alt={`project-${project.category}-${i}`} />
        </div>
      );
    });
  };

  return (
    <div className="portfolio">
        {renderProjects(projects)}
    </div>
  );
};

export { Portfolio }
