import React from "react";
import "../assets/styles/lateralPonel.css";
import AveryClyton from "../assets/images/AveryClayton.jpg"
import Icon, { Stack } from '@mdi/react';
import { mdiCellphonePlay, mdiEmail, mdiMapMarker, mdiInstagram, mdiGithub, mdiFacebook, mdiTwitter } from '@mdi/js';

function LateralPonel() {
	
	return (
		<>
			<div className="lateralPonel">
				<div className="lateralPonelUser">
					<img className="AveryClyton" src={AveryClyton} alt="AveryClayton"/>
					<span className="userName">Avery Clyton</span>
				</div>	
				<div className="lateralPonelUser">
					<hr className="hrSize" />
					<span className="blockHeader">Contact Information</span>
					<div className="Block_IconGreup">
						<Icon className="IconGrup" path={mdiCellphonePlay}></Icon>
						<span className="IconSpan">+ 374 00 00 00</span>
					</div>
					<a className="Block_IconGreup" href="https://aaregistry.org/story/avery-clayton-historian-and-collector/" target="_blank">
						<Icon className="IconGrup" path={mdiEmail}></Icon>
						<span className="IconSpan">avery.clyton@mail.ru</span>
					</a>
					<div className="Block_IconGreupMap">
						<Icon className="IconGrup" path={mdiMapMarker}></Icon>
						<span className="IconSpan">24, 15 Azatutyan Ave,<br /> Yerevan 0018, Armenia</span>
					</div>
					<hr className="hrSize" />
				</div>
				<div className="lateralPonelUser">
					<span className="blockHeader">Social Channels</span>
					<a className="Block_IconGreup" target="_blank" href="https://www.facebook.com/Avery/">
						<Icon className="IconGrup" path={mdiFacebook}></Icon>
						<span className="IconSpan">averyfacebook</span>
					</a>
					<a className="Block_IconGreup" target="_blank" href="https://twitter.com/Avxry?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
						<Icon className="IconGrup" path={mdiTwitter}></Icon>
						<span className="IconSpan">averytwitter</span>
					</a>
					<a className="Block_IconGreup" target="_blank" href="https://www.instagram.com/avery/">
						<Icon className="IconGrup" path={mdiInstagram}></Icon>
						<span className="IconSpan">averyinstagram</span>
					</a>
					<a className="Block_IconGreup" target="_blank" href="https://github.com/avery">
						<Icon className="IconGrup" path={mdiGithub}></Icon>
						<span className="IconSpan">averygithub</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default LateralPonel;