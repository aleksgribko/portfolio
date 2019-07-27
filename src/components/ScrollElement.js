import React, { useState } from "react";
import "../css/scrollElement.css";
import projectsData from "./projectsData.js";
import $ from "jquery";
import Photo from "./Photo.js";

import { debounce } from "lodash";

export default function ScrollElement(props) {
	let [position, setPosition] = useState(0);

	let numberOfProjects = projectsData.length;

	/*
		function clickedArrowUp() {
			$(".arrowDown").css("display", "block");
			if (position - 1 >= 0) {	
			window.scrollTo({
				top: $(`#project${position-1}`).position().top,
				behavior: "smooth"
			});
			}
		}
	
		function clickedArrowDown() {
			$(".arrowUp").css("display", "block");
			if (position + 1 <= numberOfProjects) {
				window.scrollTo({
				top: $(`#project${position+1}`).position().top,
				behavior: "smooth"
			});
			}
		}
	*/
	let scrollPos = 0; // scrollPos - расстояние от вехра до viewport -600

	window.addEventListener(
		"scroll",
		debounce(event => {  							// debounce( I use for debouncing many scrolls
			event.stopImmediatePropagation();
			let scrollTop = $(window).scrollTop(); // scrollTop - расстояние от вехра до viewport	+600

			// show/hide arrows
			if (scrollTop > 0) {
				// screen size $(window).height()
				//				$(".arrowUp").css("display", "block");
				$("#photoNameScroll")
					.css("display", "flex")
					.css("color", "white")
					.css("cursor", "pointer");
				$(".navbar").css("opacity", "1");				
			} else {
				//				$(".arrowUp").css("display", "none");
				$("#photoNameScroll").css("display", "none");
				$(".navbar").css("opacity", "0");				
			}
			/*			if ($(`#project${numberOfProjects}`).position().top <= scrollTop) {
							$(".arrowDown").css("display", "none");
						} else {
							$(".arrowDown").css("display", "block");
						}
			*/
			/*			for (let i = 0; i < numberOfProjects; i++) {
							if (
								$(`#project${i}`).position().top <= scrollTop && // element.position().top - расстояние от вехра до element	+600
								$(`#project${i + 1}`).position().top >= scrollTop &&
								position !== i
							) {					
								setPosition(i);
								break
							} else if (
								$(`#project${numberOfProjects}`).position().top <= scrollTop
							) {
								setPosition(numberOfProjects);
							}
			*/
			/*	scroll reader not in use

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
					}*/
		}))
/*				
			}

scrollPos = document.body.getBoundingClientRect().top;
		}, 50)  										// , 50)   end of debouncing
	);

	<div className="squareArrow" onClick={clickedArrowUp}>
			<span className="arrowUp" />
		</div>
		<div className="squareArrow" onClick={clickedArrowDown}>
			<span className="arrowDown" />
		</div>
*/
return (
	<div>
		<div id="photoNameScroll" onClick={() =>
			window.scrollTo({
				top: $('#project0').position().top,
				behavior: "smooth"
			})}>
			<Photo />
			<h3><a>Aleksandr Gribko</a></h3>
		</div>		
	</div>
);
}


