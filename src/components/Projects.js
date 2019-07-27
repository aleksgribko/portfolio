import React from "react";
import projectsData from "./projectsData.js";
import "../css/projects.css";
import $ from "jquery";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
 
}));

export default function Projects() {
  const classes = useStyles();

  window.addEventListener("orientationchange", function () {
    $('.mainCut').css("maxHeight", "50%")
    $('.mainCut').css("maxHeight", "100%")
  });



  function togglerClass(target) {
    if (target.classList == "mainCut") {
      target.classList.add("mainFull");
      $("#blackLayer").css("display", "block");
      target.classList.remove("mainCut");
    } else if (target.classList == "mainFull") {
      target.classList.add("mainCut");
      $("#blackLayer").css("display", "none");
      target.classList.remove("mainFull");
    }
  }

  function portfolioPages() {
    let keyInd = 0
    let keyInd2 = 0
    let keyInd3 = 0

    let projects = projectsData.map((project, ind, arr) => (
      <div id={project.id} key={++keyInd3} className="projectPage">
        <div className="pro">
          <h2>{project.name}</h2>
          <p>{project.what}</p>
        </div>
        <div className="lin">
          <Button href={project.git} className={classes.button} style={{ display: `${project.git ? "" : "none"}` }}>
            GIT link
        </Button>
          <Button href={project.site} className={classes.button} style={{ display: `${project.site ? "" : "none"}` }}>
            Website link
        </Button>

        </div>
        <div className="tech">
          <h3>Used technologies:</h3>
          <ul style={{ "listStyleType": "circle" }}>
            <p>
              {project.technologies.map(tech => (
                <li key={++keyInd}>{tech}</li>
              ))}
            </p>
          </ul>
        </div>
        <div className="ski">
          <h3>Acquired skills:</h3>
          <ul>
            <p>
              {project.skills.map(skill => (
                <li key={++keyInd2}>{skill}</li>
              ))}
            </p>
          </ul>
        </div>
        <div className="desc">
          <h3>Description:</h3>
          <p>{project.description}</p>
        </div>
        <div className="pic">
          <div className='limitsImg'>
            <img
              className="mainCut"
              onClick={e => togglerClass(e.target)}
              src={require(`../materials/project${ind + 1}/mainCut.jpg`)}
              alt="example"
            />
          </div>
        </div>
      </div>
    ));
    return projects;
  }

  return <div style={{ heigh: "100%", width: "100%" }}>
   
    {portfolioPages()}
  </div>;
}
