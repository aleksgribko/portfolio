import React from 'react'
import { about, education, experience, skills } from "./infoForCV.js"
import '../css/allInfo.css'

export default function AllInfo(props){

//	props.cardName




function formSectionMenu() {	
	let arrayInfo = [about, education, experience, skills]
    let completeBlock = arrayInfo.map(block => (

    	<div className='oneBlock' onClick={() => props.switchLayer(block.name)}>
			
				<span>{block.name}</span>
		
		</div>         
      
    ));
    return completeBlock;
  }


	return(
		<div className='layerMenu'>
			<div className={!props.cardName ? 'visible': 'hidden'} id='textMenu'>
				<p>
				Being devoted and motivated with ever-lasting curiosity to learn something 
				new, like a new <span className='About menuButton' onClick={() => props.switchLayer('About')}>language</span>,  
				I always wanted to work in a IT team with cutting age technologies and challenging 
				projects. Having <span className='Education menuButton' onClick={() => props.switchLayer('Education')}>education</span> in 
				IT and IP law I was working from the beggining 
				of my career either with the protection of new technologies or on its usage.
				By now I have almost 7 years of <span className='Experience menuButton' onClick={() => props.switchLayer('Experience')}>experience</span> in
				IT and IP law.</p>
				
		        <p>At some point I felt that bare application of quite stable legal
		        knowledge doesn’t develop me as much as I would like too. Moreover I am 
		        a <span className='about menuButton' onClick={() => props.switchLayer('About')}>team player</span> and 
		        was dreaming to work with people of my specialistion where everyone is learning from each other. 
		        In the IT world changes are happening everyday and feel exited to follow these changes and keep 
		        this fast pace in acquiring new <span className='technicalSkills menuButton' onClick={() => props.switchLayer('Skills')}>
		        technical skills</span>. That is why I was so excited to start my career change.         
				</p>

				
				<div className='contactField'>
				<p>My contacts:</p>
					
					<a className="contactButton" href="https://www.facebook.com/aleksandr.gribko"><i className="fab fa-facebook-f"></i></a>
					<a className="contactButton" href="https://www.linkedin.com/in/aleksandrgribko/"><i className="fab fa-linkedin-in"></i></a>
					<a className="contactButton" href="https://twitter.com/Alezh89"><i className='fab fa-twitter'></i></a>	
					<a className="contactButton" href="https://github.com/Alezh89"><i className="fab fa-github"></i></a>
					
					<p><a className="contactButton" href="mailto:alezh89@gmail.com">alezh89@gmail.com</a></p>
				</div>
											
			</div>
			<div className={props.cardName ? 'visible buttonsMenu': 'hidden'} cardName={props.cardName}>
					{formSectionMenu()}	
				</div>
		</div>
	)
}



