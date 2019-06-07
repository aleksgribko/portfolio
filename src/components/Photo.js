import React from 'react'
import '../css/photo.css'

export default function Photo(props){
	let param
	if(props.size === 'big'){
		param = {'max-width': '250px', 'max-height': '250px'}
	} else {
		param = {'width': '50px', 'height': '50px'}
	}

	return(
		<img id='photoOfMe' style={param} src={require('./../materials/IMG_5310.jpg')} />
		
	)
}