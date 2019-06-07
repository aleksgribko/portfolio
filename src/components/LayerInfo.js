import React, { useState, useEffect } from "react";
import Photo from "./Photo.js";
import HelloInfo from "./HelloInfo.js";
import projectsData from "./projectsData.js";
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
						<h4>{props.cardName}</h4>
						<p>{about.about}</p>
						<h4>Hobbies</h4>
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
								<h4>{oneUni.name}</h4>
								<h5>{oneUni.degree}</h5>
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
						<p>about.about</p>						
					</div>
				];
				break
			case 'Legal Experience':
				formedContend = [
					<div className="infoCard">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>
						<h4>{props.cardName}</h4>
						<p>about.about</p>						
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
								<div style={{'width': `${oneSkill.level}%`}}>{oneSkill.level}%</div>
								</div>
							</div>
							)))()}						
					</div>
				];
				break
			case 'Soft Skills':
				formedContend = [
					<div className="infoCard">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>
						<h4>{props.cardName}</h4>
						<p>Languages</p>
						{(() => softSkills.languages.map(oneLang => (
							<div>
								<span>{oneLang.lang}</span>
								<div className="progress">
								<div style={{'width': `${oneLang.level}%`}}><span>{oneLang.level}</span></div>
								</div>
							</div>
							)))()}						
					</div>
				];
				break
			default:
				formedContend = [<Photo size="big" />, <HelloInfo />]
		}
		return formedContend

	}

	
	return (

		<div id="layerForInfo">
			{formContentInCard()}
			<a target="_blank" rel="noopener noreferrer" href={require('../materials/CV_AleksandrGribko.pdf')}>
					Download my CV/Resume
			</a>
		</div>
	)
}
