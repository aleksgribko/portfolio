import React from "react";
import "../css/contacts.css";
import Clipboard from "clipboard";

import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default class Contacts extends React.Component {
	constructor() {
		super();
		this.state = {
			open: false
		};
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

	componentDidMount() {
		let btns = document.getElementById("btnCopy1");
		new Clipboard(btns);
	}
	render() {
		return (
			<div className="flex navbar" style={{ "zIndex": "887", 'borderRadius': '10px' }}>
				<ul>
					<li>
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
										className="navItem"
										id="btnCopy1"
										onClick={this.handleTooltipOpen}
										data-clipboard-text="aleks.gribko@gmail.com"							
										target="_top"
									>
										gmail
									</span>
								</Tooltip>
							</div>
						</ClickAwayListener>
					</li>
					<li>
						<a
							className="navItem"
							href="https://github.com/Alezh89"
						>
							github
						</a>
					</li>
					<li>
						<a
							className="navItem"
							href="https://twitter.com/Alezh89"
						>
							twitter
						</a>
					</li>
					<li>
						<a
							className="navItem"
							href="https://www.linkedin.com/in/aleksandrgribko/"
						>
							linkedin
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
