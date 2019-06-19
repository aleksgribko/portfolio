import React from "react";
import "../css/helloInfo.css";

export default function HelloInfo() {
	return (
		<div style={{ color: "white" }}>
			<p>Hello,</p>
			<p>
				My name is{" "}
				<span style={{ color: "#FFD200" }}>Aleksandr Gribko</span>
			</p>
			<p>
				I am a{" "}
				<span style={{ color: "#FFD200" }}>Front-end developer</span>{" "}
				based in France
			</p>

			<a
				className="buttonsCVback"
				target="_blank"
				rel="noopener noreferrer"
				style={{
					color: "white",
					border: "none",
					"borderRadius": "4px",
					padding: "4px",
					"textDecoration": "none"
				}}
				href={require("../materials/CV_AleksandrGribko.pdf")}
			>
				Download my CV/Resume
			</a>
		</div>
	);
}
