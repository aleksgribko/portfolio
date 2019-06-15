import React, { useState, useEffect } from "react";
import Photo from "./Photo.js";
import HelloInfo from "./HelloInfo.js";
import SmallCard from "./SmallCard.js"; 
import { about, education, techExperience, legalExperience, technicalSkills, softSkills } from "./infoForCV.js";
import layerInfo from "../css/layerInfo.css";

export default function LayerInfo(props) {

	function formContentInCard() {

		let formedContend
		switch(props.cardName){
			case 'About':
				formedContend = [
					<div className="infoCard">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>
						<h4 className='reddishColor'>{props.cardName}</h4>
						<p>{about.about}</p>
						<h4 className='reddishColor'>Hobbies</h4>
						<p>{about.hobbies}</p>						
					</div>
				];
				break
			case 'Education':
				formedContend = [
					<div className="infoCard">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>						
						<h4>{props.cardName}</h4>
						{(() => education.unis.map(oneUni => (
							<div>
								<h4 className='reddishColor'>{oneUni.name}</h4>
								<span>{oneUni.degree}</span>
								<p>{oneUni.years}</p>
								<hr />								
							</div>
							)))()}							
					</div>
				];
				break
			case 'Tech Experience':
				formedContend = [
					<div className="infoCard">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>
						<h4>{props.cardName}</h4>						
						<div>
							<h2 className='reddishColor'>{techExperience.quant}</h2>
							<p>{techExperience.descr1}</p>
							<h2 className='reddishColor'>{techExperience.term}</h2>
							<p>{techExperience.descr2}</p>			
							<p>{techExperience.text}</p>				
						</div>											
					</div>
				];
				break
			case 'Legal Experience':
				formedContend = [
					<div className="infoCard">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>
						<h4>{props.cardName}</h4>
						{(() => legalExperience.places.map(onePlace => (
							<div>
								<span className='reddishColor'>{onePlace.company} </span><span className='textSmall'>{onePlace.term}</span>
								<p className='textSmall'>{onePlace.position}</p>
								<p className='textSmall'>{onePlace.spec}</p>								
								<hr />								
							</div>
							)))()}							
					</div>
				];
				break
			case 'Technical Skills':
				formedContend = [
					<div className="infoCard">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>
						<h4>{props.cardName}</h4>	
						{(() => technicalSkills.skills.map(oneSkill => (
							<div>
								<span>{oneSkill.skill}</span>
								<div className="progress">
								<div className='whiteBar' style={{'width': `${oneSkill.level}%`}}>{oneSkill.level}%</div>
								</div>
							</div>
							)))()}						
					</div>
				];
				break
			case 'Languages':
				formedContend = [
					<div className="infoCard">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>
						<h4>{props.cardName}</h4>						
						{(() => softSkills.languages.map(oneLang => (
							<div>
								<span>{oneLang.lang}</span>
								<div className="progress">
								<div style={{'width': `${oneLang.level}%`}}><span className='whiteBar'>{oneLang.level}%</span></div>
								</div>
							</div>
							)))()}						
					</div>
				];
				break
			default:
				formedContend = (
					<div id='helloInfo'>
						<Photo size="big" />
						<HelloInfo />						
					</div>)
		}
		return formedContend

	}

	
	return (

		<div id="layerForInfo">
			{formContentInCard()}			
		</div>
	)
}
