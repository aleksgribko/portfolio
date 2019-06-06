import React from 'react'
import OneProject from './OneProject.js'
import projectsData from './projectsData.js'
import '../css/projects.css'


export default function Projects(){


  function protfolioPages() {
    let projects = projectsData.map(project => (
    <OneProject      
      id={project.id}
      name={project.name}
      technologies={project.technologies}
      skills={project.skills}
      git={project.git}
      site={project.site}
      description={project.description}
      pictures={project.pictures}      
    />
  ));
  return projects;
  }

  return(
    <div>
      {protfolioPages()}
    </div>
  )
}





