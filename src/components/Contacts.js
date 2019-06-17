import React from "react";
import "../css/contacts.css";
import $ from 'jquery'
import Clipboard from 'clipboard'

export default class Contacts extends React.Component {

  	componentDidMount(){
  	let btns = document.getElementById('btnCopy1')
    let clipboard = new Clipboard(btns);
    
}
render(){
	return (
		<div className="flex navbar" style={{'z-index': '100'}}>
		<ul>
			<li>
				
				<a	
					id='btnCopy1'	
					data-clipboard-text="alezh89@gmail.com"									
				//	href="mailto:alezh89@gmail.com?Subject=Hi,%20Alex.%20I%20saw%20your%20portfolio%20website"
				//	target="_top"
				>
					alezh89@gmail.com
				</a>
			</li>
			<li>
				<a href="https://github.com/Alezh89">github</a>
			</li>
			<li>
				<a href="https://twitter.com/Alezh89">twitter</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/aleksandrgribko/">
					linkedin
				</a>
			</li>
		</ul>
		</div>
	);
}
}
