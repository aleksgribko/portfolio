import React from 'react'
import '../css/menuItem.css'

export default function MenuItem(props){
	
	//	name={props.name}
    //    id={props.id}
    //    link={props.link} 
    //	props.cardName     

	return(
		<div className='oneBlock'>
		<a onClick={() => props.switchLayer(props.name)}>
				<span>{props.name}</span>
		</a>			
		</div>
	)
}