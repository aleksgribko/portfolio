import React from 'react'
import projectsData from './projectsData.js'
import '../css/projects.css'
import $ from 'jquery'


export default function Projects(){

  

  function togglerClass(target){




    if(target.classList == 'mainCut'){
      target.classList.add("mainFull")
      $('#blackLayer').css('display', 'block')
      target.classList.remove('mainCut')
    } else if (target.classList == 'mainFull'){
       target.classList.add("mainCut")
       $('#blackLayer').css('display', 'none')
       target.classList.remove('mainFull')
    }  else if (target.classList == 'mobileCut'){
       target.classList.add("mobileFull")
       $('#blackLayer').css('display', 'block')
       target.classList.remove('mobileCut')
    } else if (target.classList == 'mobileFull'){
       target.classList.add("mobileCut")
       $('#blackLayer').css('display', 'none')
       target.classList.remove('mobileFull')
    }


  }



  function portfolioPages() {
    
    let projects = projectsData.map((project, ind, arr) => (
    <div id={project.id} className='projectPage'>

     
      <div className='left'>
        <img className='mainCut' onClick={(e) => togglerClass(e.target)} src={require(`../materials/project${ind+1}/mainCut.jpg`)}  alt='example' />
       
       <p className='imgInfo'>{project.pictureText[0]}</p>

       <img className='mobileCut' onClick={(e) => togglerClass(e.target)} src={require(`../materials/project${ind+1}/mobileCut.jpg`)}  alt='example' />
       <p className='imgInfo'>{project.pictureText[1]}</p>
       </div>      

 
      <div className='right'>
       
      <div className='pro'>
        <h2 >Project {ind+1} of {arr.length}</h2>
        <p>{project.name}</p>
      </div>
      <div className='lin'>
        <a href={project.git}><span>GIT link</span></a>
        <a href={project.site}><span>Visit website</span></a>
      </div>
      <div className='tech'>
        <h2>Used technologies:</h2>
        <ul style={{'list-style-type': 'circle'}}><p>{project.technologies.map(tech => (<li>{tech}</li>))}</p></ul>
      </div>
      <div className='ski'>
      <h2>Acquired skills:</h2>
      <ul><p>{project.skills.map(skill => (<li>{skill}</li>))}</p></ul>
      </div>
      <p className='desc'>Description: {project.description}</p>
      </div>     
     
      
    </div>
  ));
  return projects;
  }

  return(
    <div style={{'heigh': '100%'}}>
   {portfolioPages()}
   </div>
  )
}


 



