import React from "react";
import { about, education, experience, skills } from "./infoForCV.js";
import "../css/allInfo.css";
import Clipboard from "clipboard"; 
 
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default class AllInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.formSectionMenu = this.formSectionMenu.bind(this);
		this.handleTooltipClose = this.handleTooltipClose.bind(this);
		this.handleTooltipOpen = this.handleTooltipOpen.bind(this);
	}

	handleTooltipClose() {
		this.setState({
			open: false
		});
	}

	handleTooltipOpen() {
		this.setState({
			open: true
		});
	}

	formSectionMenu() {
		let arrayInfo = [about, education, experience, skills];
		let keyInd = 0
		let completeBlock = arrayInfo.map(block => (
			<div
				className="oneBlock"
				onClick={() => this.props.switchLayer(block.name)}
				key={++keyInd}
			>
				<span>{block.name}</span>
			</div>
		));
		return completeBlock;
	}

	componentDidMount() {
		let btns = document.getElementById("btnCopy2");
		new Clipboard(btns);
	}

	render() {
		return (
			<div className="layerMenu">
				<div					
					className={!this.props.cardName ? "visible" : "hidden"}
					id="textMenu"
				>
					<p className="animated slideInRight">
						Being devoted and motivated with ever-lasting curiosity
						to learn something new, like a new{" "}
						<span
							className="About menuButton"
							onClick={() => this.props.switchLayer("About")}
						>
							language
						</span>
						, I always wanted to work in a team of bright people who 
						work with modern frameworks on challenging projects. Having{" "}
						<span
							className="Education menuButton"
							onClick={() => this.props.switchLayer("Education")}
						>
							education
						</span>{" "}
						in IT law I was working from the beginning of my
						career either with the protection of new technologies or
						on its usage. I have{" "}
						<span
							className="Experience menuButton"
							onClick={() => this.props.switchLayer("Experience")}
						>
							experience
						</span>{" "}
						in IT law and now working on front-end projects. My favorite 
						tools are JS ES6, ReactJS, CSS and SASS.
					</p>

					<p className="animated slideInRight">
						Full of ideas, working both within a team and on my own, autonomous. 
						The priority for me is the best UX and responsive design. I want to share 
						with my team my help, devotion, and interest in making innovations in web 
						development. In the IT world changes are happening every day and I feel 
						excited to follow these changes and keep this fast pace in acquiring new{" "}
						<span
							className="technicalSkills menuButton"
							onClick={() => this.props.switchLayer("Skills")}
						>
							technical skills
						</span>
						. That is why last year I was so excited to start my
						career change by working on{" "}
						<span
							className="Experience menuButton"
							onClick={() => this.props.switchLayer("Experience")}
						>
							front-end projects
						</span>{" "}
						under mentors' control.
					</p>

					<div className="contactField">
						<p className="animated slideInRight">My contacts:</p>

						<a
							className="contactButton animated slideInRight"
							href="https://www.facebook.com/aleksandr.gribko"
						>
							<i className="fab fa-facebook-f" />
						</a>
						<a
							className="contactButton animated slideInRight"
							href="https://www.linkedin.com/in/aleksandrgribko/"
						>
							<i className="fab fa-linkedin-in" />
						</a>
						<a
							className="contactButton animated slideInRight"
							href="https://twitter.com/Alezh89"
						>
							<i className="fab fa-twitter" />
						</a>
						<a
							className="contactButton animated slideInRight"
							href="https://github.com/Alezh89"
						>
							<i className="fab fa-github" />
						</a>

						<div>
							<ClickAwayListener
								onClickAway={this.handleTooltipClose}
							>
								<div>
									<Tooltip
										PopperProps={{
											disablePortal: true
										}}
										onClose={this.handleTooltipClose}
										open={this.state.open}
										disableFocusListener
										disableHoverListener
										disableTouchListener
										title="email aleks.gribko@gmail.com is copied"
									>
										<span
											id="btnCopy2"
											data-clipboard-text="aleks.gribko@gmail.com"
											onClick={this.handleTooltipOpen}
											className=" animated slideInRight contactButton"											
										>
											aleks.gribko@gmail.com
										</span>
									</Tooltip>
								</div>
							</ClickAwayListener>
						</div>
					</div>
				</div>
				<div
					className={
						this.props.cardName ? "visible buttonsMenu" : "hidden"
					}
				
				>
					{this.formSectionMenu()}
				</div>
			</div>
		);
	}
}
