import React, { useState, useEffect } from "react";
import Photo from "./Photo.js";
import HelloInfo from "./HelloInfo.js";
import SmallCard from "./SmallCard.js"; 
import { about, education, experience, skills } from "./infoForCV.js";
import layerInfo from "../css/layerInfo.css";

export default function LayerInfo(props) {

	function formContentInCard() {

		let formedContend
		switch(props.cardName){
			case 'About':
				formedContend = [
					<div className="infoCard widthInfo">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>
						<h4 className='reddishColor'>{props.cardName}</h4>
						<p>{about.about}</p>
						<h4 className='reddishColor'>Hobbies</h4>
						<p>{about.hobbies}</p>	
						{(() => about.languages.map(oneLang => (
							<div>
								<span>{oneLang.lang}</span>
								<div className="progress">
								<div style={{'width': `${oneLang.level-5}%`}}><span className='whiteBar'>{oneLang.cert}</span></div>
								</div>
							</div>
							)))()}						
					</div>
				];
				break
			case 'Education':
				formedContend = [
					<div className="infoCard widthInfo">
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
			case 'Experience':
				formedContend = [
					<div className="infoCard widthInfo">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>
						<h4>{props.cardName}</h4>
						{(() => experience.places.map(onePlace => (
							<div>
								<span className='reddishColor'>{onePlace.company}, </span><span>{onePlace.spec}</span>
								<p><span className='textSmall'>{onePlace.position}, </span><span className='textSmall'>{onePlace.term}</span></p>
								<hr />								
							</div>
							)))()}							
					</div>
				];
				break
			case 'Skills':
				formedContend = [
					<div className="infoCard widthInfo">
						<SmallCard 
						onClick = {() => props.getBackIndentificator(null)}/>
						<h4>{props.cardName}</h4>	
						<div className='skills'>
						{(() => skills.skills.map(oneSkill => (
							<div className='skillOne'>
								<span>{oneSkill.skill}</span>
								<div className="progress">
								<div className='whiteBar' style={{'text-align': 'right', 'width': `${oneSkill.numbProj +2}5%`}}>{oneSkill.numbProj} {oneSkill.numbProj == 1 ? 'project' : 'projects'}</div>
								</div>
							</div>
							)))()}	
							</div>					
					</div>
				];
				break			
			default:
				formedContend = (
					<div id='helloInfo' className='widthMain'>
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
