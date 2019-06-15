import React from "react";
import "../css/contacts.css";

export default function Contacts() {
	return (
		<div className="flex navbar" style={{'z-index': '100'}}>
		<ul>
			<li>
				<a
					href="mailto:alezh89@gmail.com?Subject=Hi,%20Alex.%20I%20saw%20your%20portfolio%20website"
					target="_top"
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
