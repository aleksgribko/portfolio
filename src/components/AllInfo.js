import React from 'react'
import OneInfoBlock from './OneInfoBlock.js'
import '../css/allInfo.css'

export default function AllInfo(){

const allInfo = [
	{name: 'About', link: 'man', id: 101},
	{name: 'Education',  link: 'scholarship', id: 102},
	{name: 'TechExperience',  link: 'coding', id: 103},
	{name: 'LegalExperience',  link: 'law', id: 104},
	{name: 'TechnicalSkills',  link: 'skills', id: 105},
	{name: 'SoftSkills',  link: 'brainstorm', id: 106}
]

function formsectionInfo() {	
    let completeBlock = allInfo.map(block => (
      <OneInfoBlock
        name={block.name}
        id={block.id}
        link={block.link}        
      />
    ));
    return completeBlock;
  }


	return(
		<div className='infoBlocks'>
			{formsectionInfo()}
		</div>
	)
}