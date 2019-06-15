import React from 'react'
import OneInfoBlock from './OneInfoBlock.js'
import '../css/allInfo.css'


export default function AllInfo(props){

//	props.cardName

const allInfo = [
	{name: 'About', link: '_boss', id: 101},
	{name: 'Education',  link: '_books', id: 102},
	{name: 'Tech Experience',  link: '_computer', id: 103},
	{name: 'Legal Experience',  link: '_law', id: 104},
	{name: 'Technical Skills',  link: '_skills', id: 105},
	{name: 'Languages',  link: '_language', id: 106}
]



function formSectionInfo() {	
    let completeBlock = allInfo.map(block => (
      <OneInfoBlock
        name={block.name}
        id={block.id}
        link={block.link}    
        switchLayer={props.switchLayer}  
        cardName={props.cardName}          
      />
    ));
    return completeBlock;
  }


	return(
		<div className='layerMenu'>
		<div id={props.cardName ? 'infoScreen': 'helloScreen'} cardName={props.cardName}>
			{formSectionInfo()}
		</div>
		</div>
	)
}



