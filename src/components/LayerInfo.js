import React from "react";
import Photo from "./Photo.js";
import HelloInfo from "./HelloInfo.js";
import SmallCard from "./SmallCard.js";
import { about, education, experience, skills } from "./infoForCV.js";
import "../css/layerInfo.css";

export default function LayerInfo(props) {
	function formContentInCard() {
		let formedContend;
		let keyInd=0
		let keyInd2=0
		let keyInd3=0
		let keyInd4=0
		switch (props.cardName) {
			case "About":
				formedContend = [
					<div key='About' className="infoCard widthInfo">
						<SmallCard
							onClick={() => props.getBackIndentificator(null)}
						/>
						<h4 className="reddishColor">{props.cardName}</h4>

						{(() =>
							about.languages.map(oneLang => (
								<div key={++keyInd}>
									<span>{oneLang.lang}</span>
									<div className="progress">
										<div
											style={{
												width: `${oneLang.level - 5}%`
											}}
										>
											<span className="whiteBar">
												{oneLang.cert}
											</span>
										</div>
									</div>
								</div>
							)))()}
						<ul>
							<h4 className="reddishColor">Hobbies</h4>
							<p>{about.hobbies}</p>
						</ul>

						<ul>
							<h4 className="reddishColor">Games</h4>
							<p>{about.games}</p>
						</ul>
						<ul>
							<h4 className="reddishColor">Movies</h4>
							<p>{about.movies}</p>
						</ul>
						<ul>
							<h4 className="reddishColor">Music</h4>
							<p>{about.music}</p>
						</ul>
						<ul>
							<h4 className="reddishColor">Books</h4>
							<p>{about.books}</p>
						</ul>
					</div>
				];
				break;
			case "Education":
				formedContend = [
					<div key='Education' className="infoCard widthInfo">
						<SmallCard
							onClick={() => props.getBackIndentificator(null)}
						/>
						<h4>{props.cardName}</h4>
						{(() =>
							education.unis.map(oneUni => (
								<div key={++keyInd2}>
									<h4 className="reddishColor">
										{oneUni.name}
									</h4>
									<span className="shaddow">
										{oneUni.degree}
									</span>
									<p>{oneUni.years}</p>
									<hr />
								</div>
							)))()}
					</div>
				];
				break;
			case "Experience":
				formedContend = [
					<div key='Experience' className="infoCard widthInfo">
						<SmallCard
							onClick={() => props.getBackIndentificator(null)}
						/>
						<h4>{props.cardName}</h4>
						{(() =>
							experience.places.map(onePlace => (
								<div key={++keyInd3}>
									<span className="reddishColor">
										{onePlace.company},{" "}
									</span>
									<span>{onePlace.spec}</span>
									<p>
										<span className="textSmall">
											{onePlace.position},{" "}
										</span>
										<span className="textSmall">
											{onePlace.term}
										</span>
									</p>
									<hr />
								</div>
							)))()}
					</div>
				];
				break;
			case "Skills":
				formedContend = [
					<div key='Skills' className="infoCard widthInfo">
						<SmallCard
							onClick={() => props.getBackIndentificator(null)}
						/>
						<h4>{props.cardName}</h4>
						<div className="skills">
							{(() =>
								skills.skills.map(oneSkill => (
									<div
									key={++keyInd4}
										className="skillOne"
										style={{ "paddingBottom": "4px" }}
									>
										<span>{oneSkill.skill}</span>
										<div className="progress">
											<div
												className="whiteBar"
												style={{
													"textAlign": "right",
													width: `${oneSkill.numbProj +
														2}5%`
												}}
											>
												{oneSkill.numbProj}{" "}
												{oneSkill.numbProj === 1
													? "project"
													: "projects"}
											</div>
										</div>
									</div>
								)))()}
						</div>
					</div>
				];
				break;
			default:
				formedContend = (
					<div id="helloInfo" className="widthMain">
						<Photo size="big" />
						<HelloInfo />
					</div>
				);
		}
		return formedContend;
	}

	return <div id="layerForInfo">{formContentInCard()}</div>;
}
