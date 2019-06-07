import React from 'react'

import '../css/oneInfoBlock.css'

export default function OneInfoBlock(props){
	
	//	name={props.name}
    //    id={props.id}
    //    link={props.link}      

	return(
		<a onClick={() => props.switchLayer(props.id, props.name)}>
			<div className='oneBlock'>				
				<img className='imgInfo' src={require(`./../materials/${props.link}.png`)} />
				<span className='textInfo'>{props.name}</span>				
			</div>
			
		</a>
	)
}