import React from "react";
import Photo from "./Photo.js";
import "../css/smallCard.css";

export default function SmallCard(props) {
	return (
		<div>
			<div
				className="flex pointerOnHover"
				onClick={props.onClick}
				style={{ "zIndex": "9999", position: "relative" }}
			>
				<Photo size="small" />
				<h3>Aleksandr Gribko</h3>
			</div>
			<div style={{ display: "block", "textAlign": "right" }}>
				<button
					className="buttonsCVback"
					onClick={props.onClick}
					style={{
						border: "none",
						"borderRadius": "4px",
						padding: "4px",
						"fontSize": "1.1vmax"
					}}
				>
					Back to main page
				</button>
			</div>
		</div>
	);
}
