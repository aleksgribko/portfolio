import React from "react";
import '../css/helloInfo.css'

export default function HelloInfo() {
	return (
		<div style={{ color: "white" }}>					
			<p>Hello,</p>
			<p>My name is <span style={{ color: "#890506" }}>Aleksandr Gribko</span></p>
			<p>I am a <span style={{ color: "#890506" }}>Front-end developer</span> based in France</p>

			<a
				target="_blank"
				rel="noopener noreferrer"
				style={{ color: "white", "background-color": "#890506", 'border': 'none', 'border-radius': '4px', 'padding': '4px', 'text-decoration': 'none' }}
				href={require("../materials/CV_AleksandrGribko.pdf")}
			>
				Download my CV/Resume
			</a>
		</div>
	);
}
