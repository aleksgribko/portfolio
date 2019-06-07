import React from 'react'
import OneInfoBlock from './OneInfoBlock.js'
import '../css/allInfo.css'
import styled from 'styled-components'

export default function AllInfo(props){

//	props.cardName

const allInfo = [
	{name: 'About', link: 'man', id: 101},
	{name: 'Education',  link: 'scholarship', id: 102},
	{name: 'Tech Experience',  link: 'coding', id: 103},
	{name: 'Legal Experience',  link: 'law', id: 104},
	{name: 'Technical Skills',  link: 'skills', id: 105},
	{name: 'Soft Skills',  link: 'brainstorm', id: 106}
]

//Styled components don't work here

const InfoBlockStyle = styled.div`
	display: grid;
	grid-template-rows: ${props => !props.cardName ? '170px 150px 150px' : 
	'50px 50px 50px 50px 50px 50px'};
	grid-template-columns: ${props => !props.cardName ? '150px 150px' : 
	'150px'};
`

function formSectionInfo() {
console.log(props)	
    let completeBlock = allInfo.map(block => (
      <OneInfoBlock
        name={block.name}
        id={block.id}
        link={block.link}    
        switchLayer={props.switchLayer}    
      />
    ));
    return completeBlock;
  }


	return(
		<InfoBlockStyle>
			{formSectionInfo()}
		</InfoBlockStyle>
	)
}