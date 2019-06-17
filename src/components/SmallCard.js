import React from "react";
import Photo from "./Photo.js";

export default function SmallCard(props) {
	return (
		<div>
			<div
				className="flex"
				onClick={props.onClick}
				style={{ "z-index": "9999", position: "relative" }}
			>
				<Photo size="small" />
				<h3>Aleksandr Gribko</h3>
			</div>
			<div style={{ display: "block", "text-align": "right" }}>
				<button
					onClick={props.onClick}
					style={{ color: "white", "background-color": "#890506", 'border': 'none', 'border-radius': '4px', 'padding': '4px', 'font-size': '1.1vmax'}}
				>
					Back to main page
				</button>
			</div>
		</div>
	);
}
