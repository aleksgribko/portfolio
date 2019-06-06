import React, { useState, useEffect } from 'react'	
import Photo from './Photo.js'
import HelloInfo from './HelloInfo.js'

export default function LayerInfo(props){

		function formInfoWindow(){	

		let mix
		if(props.identificator){
			mix = 
			[<span>something came</span>, 
			<a onClick={() => props.getBackIndentificator(null)}>Back to hello page</a>]	
		} else {
			mix = [<Photo />, <HelloInfo />]
		}			     
		return mix    
	}

	return (
		<div id='layerForInfo'>
			{formInfoWindow()}   
		 </div> 
	)
}


	