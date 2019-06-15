import React from 'react'
import '../css/oneInfoBlock.css'

export default function OneInfoBlock(props){
	
	//	name={props.name}
    //    id={props.id}
    //    link={props.link} 
    //	props.cardName     

	return(
		<div className='oneBlock'>
		<a onClick={() => props.switchLayer(props.id, props.name)}>
							
				<img src={require(`./../materials/${props.link}.svg`)} />
				<span>{props.name}</span>				
			
		</a>			
		</div>
	)
}