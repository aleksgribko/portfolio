import React from "react";
import Photo from "./Photo.js";

export default function SmallCard(props) {
	return (
		<div>
			<div
				className="flex"
				onClick={props.onClick}
				style={{'z-index': '9999', 'position': 'relative'}}				
			>
				<Photo size="small" />
				<h3>Aleksandr Gribko</h3>
			</div>
			<div style={{ display: "block", "text-align": "right" }}>
				<a onClick={props.onClick}>
					Go back to hallo page
				</a>
			</div>
		</div>
	);
}
