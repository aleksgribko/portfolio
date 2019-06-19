import React, { useState, useEffect } from "react";
import "../css/scrollElement.css";
import projectsData from "./projectsData.js";
import $ from "jquery";
import Photo from "./Photo.js";

import { debounce } from "lodash";

export default function ScrollElement(props) {
	let [position, setPosition] = useState(0);

	let numberOfProjects = projectsData.length;

	function clickedArrowUp() {
		$(".arrowDown").css("display", "block");
		if (position - 1 >= 0) {
			setPosition(--position);
		}
	}

	function clickedArrowDown() {
		$(".arrowUp").css("display", "block");
		if (position + 1 <= numberOfProjects) {
			setPosition(++position);
		}
	}

	let scrollPos = 0; // scrollPos - расстояние от вехра до viewport -600

	window.addEventListener(
		"scroll",
		debounce(event => {
			event.stopImmediatePropagation();
			let scrollTop = $(window).scrollTop(); // scrollTop - расстояние от вехра до viewport	+600

			// show/hide arrows
			if (scrollTop >= $(window).height()) {
				// screen size $(window).height()
				$(".arrowUp").css("display", "block");
				$("#photoNameScroll")
					.css("display", "flex")
					.css("color", "#FF4316")
					.css("cursor", "pointer");
				$(".navItem").css("color", "#FF4316");
			} else {
				$(".arrowUp").css("display", "none");
				$("#photoNameScroll").css("display", "none");
				$(".navItem").css("color", "#FFD200");
			}
			if ($(`#project${numberOfProjects}`).position().top <= scrollTop) {
				$(".arrowDown").css("display", "none");
			} else {
				$(".arrowDown").css("display", "block");
			}

			for (let i = 0; i < numberOfProjects; i++) {
				if (
					$(`#project${i}`).position().top + 1 < scrollTop && // element.position().top - расстояние от вехра до element	+600
					$(`#project${i + 1}`).position().top > scrollTop
				) {
					if (document.body.getBoundingClientRect().top > scrollPos) {						
						if (i >= 0) {
							setPosition(i);
							scrollPos = document.body.getBoundingClientRect()
								.top;
						}
					} else if (
						document.body.getBoundingClientRect().top < scrollPos
					) {						
						if (i <= numberOfProjects) {
							setPosition(i + 1);
							scrollPos = document.body.getBoundingClientRect()
								.top;
						}
					}
				}
			}

			scrollPos = document.body.getBoundingClientRect().top;
		}, 50)
	);

	useEffect(() => {
		window.scrollTo({
			top: $(`#project${position}`).position().top,
			behavior: "smooth"
		});
	});

	return (
		<div>
			<div id="photoNameScroll" onClick={() => setPosition(0)}>
				<Photo />
				<h3>Aleksandr Gribko</h3>
			</div>
			<div className="squareArrow" onClick={clickedArrowUp}>
				<span className="arrowUp" />
			</div>
			<div className="squareArrow" onClick={clickedArrowDown}>
				<span className="arrowDown" />
			</div>
		</div>
	);
}
