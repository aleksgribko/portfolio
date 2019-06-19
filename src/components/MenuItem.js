import React from "react";
import "../css/menuItem.css";

export default function MenuItem(props) {
	return (
		<div className="oneBlock">
			<a onClick={() => props.switchLayer(props.name)}>
				<span>{props.name}</span>
			</a>
		</div>
	);
}
