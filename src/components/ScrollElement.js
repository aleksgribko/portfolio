import React, { useState, useEffect  } from "react";
import "../css/scrollElement.css";
import projectsData from './projectsData.js'
import $ from "jquery";


let curYPos, curDown, mouseUpHere

	window.addEventListener('mousemove', function(e){ 	  
	  curDown && ($(window).scrollTop($(window).scrollTop() + (curYPos - e.pageY))
	  	
	)				
	})

	window.addEventListener('mousedown', function(e){ 
	  curYPos = e.pageY; 	  
	  curDown = true; 
	});

	window.addEventListener('mouseup', function(e){ 
	  curDown = false; 	  
/*	  
	  for (let i=1; i<=numberOfProjects; i++){
	  	if ($(`#project${i}`).position().top > window.scrollY){
	  		setPosition(i-1)	
	  		break
	  	} else if ($(`#project${i}`).position().top == window.scrollY) {
	  		setPosition(i)
	  	}
	  }
	  console.log(position)
	  if (window.scrollY > 0){
	  	$('.arrowUp').css('display', 'block')
	  }
	  */
	//  if(curYPos>mouseUpHere){
	//  	setPosition(--position)	
	//  } else if (curYPos<mouseUpHere) {
	//  	setPosition(++position)	
	//  }
	//  console.log(position)
	});



export default function ScrollElement(props) {	

	let [position, setPosition] = useState(0)

	let numberOfProjects = projectsData.length
	



	function clickedArrowUp() {
		$('.arrowDown').css('display', 'block')				
		setPosition(--position)	
		console.log(position)
	}

	function clickedArrowDown() {	
		$('.arrowUp').css('display', 'block')
		setPosition(++position)		
		console.log(position)	
	}

	let scrollPos = 0		

	window.addEventListener('scroll', (event) => {

		event.stopImmediatePropagation()
		let scrollTop = $(window).scrollTop()		

		if(scrollTop > 0){
				$('.arrowUp').css('display', 'block')
			} else {
				$('.arrowUp').css('display', 'none')
			}
		if($(`#project${numberOfProjects}`).position().top == scrollTop){
				$('.arrowDown').css('display', 'none')
			} else {
				$('.arrowDown').css('display', 'block')
			}
	
		for (let i=0; i<numberOfProjects; i++){
			if (
			$(`#project${i}`).position().top < scrollTop &&
			$(`#project${i+1}`).position().top > scrollTop 
			) {
				if (document.body.getBoundingClientRect().top > scrollPos){
					console.log('UP', position)	
					setPosition(i)						
				}
				else {
					console.log('DOWN', position)		
					setPosition(++i)			
				}
			}
		}
		
			
	
	scrollPos = (document.body.getBoundingClientRect()).top;
		
		});

	useEffect(() =>{	
	console.log('position', position)	
	//	window.onresize = function() {
	//    	window.scrollTo(0, $(`project${position}`).position().top)	    	
	//	};	

		window.scrollTo({
			top: $(`#project${position}`).position().top,
			behavior: 'smooth'
			})
	   if(position == 0) {
       $('.arrowUp').css('display', 'none')
       } else { $('.arrowUp').css('display', 'block')}	
       if(position == numberOfProjects) {
       $('.arrowDown').css('display', 'none')
       } else {$('.arrowDown').css('display', 'block')}
	})
	

	return (
		<div>
			<div class='squareArrow' onClick={clickedArrowUp}><span class="arrowUp"></span></div>
			<div class='squareArrow' onClick={clickedArrowDown}><span class="arrowDown"></span></div>
		</div>
		)
}