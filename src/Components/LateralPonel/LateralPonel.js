import React from "react";
import "./LateralPonel.css";
import AveryClyton from "../../assets/images/AveryClayton.jpg"
import Icon, { Stack } from '@mdi/react';
import { mdiCellphonePlay, mdiEmail, mdiMapMarker, mdiInstagram, mdiGithub,	mdiFacebook, mdiTwitter } from '@mdi/js';

function LateralPonel() {
	return (
		<>
			<div className="lateralPonel">
				<div className="lateralPonel__User">
					<img className="User_Icon" src={AveryClyton} alt="AveryClayton"/>
					<span className="User_Name">Avery Clyton</span>
				</div>	
				<div className="lateralPonel__User">
					<hr className="hrSize" />
					<span className="blockHeader">Contact Information</span>
					<div className="Block_IconGroup">
						<Icon className="IconGroup" path={mdiCellphonePlay}></Icon>
						<span className="IconSpan">+ 374 00 00 00</span>
					</div>
					<a className="Block_IconGroup" href="https://aaregistry.org/story/avery-clayton-historian-and-collector/" target="_blank">
						<Icon className="IconGroup" path={mdiEmail}></Icon>
						<span className="IconSpan">avery.clyton@mail.ru</span>
					</a>
					<div className="Block_IconGroup IconGrupMap">
						<Icon className="IconGroup" path={mdiMapMarker}></Icon>
						<span className="IconSpan">24, 15 Azatutyan Ave,<br /> Yerevan 0018, Armenia</span>
					</div>
					<hr className="hrSize" />
				</div>
				<div className="lateralPonel__User">
					<span className="blockHeader">Social Channels</span>
					<a className="Block_IconGroup" target="_blank" href="https://www.facebook.com/Avery/">
						<Icon className="IconGroup" path={mdiFacebook}></Icon>
						<span className="IconSpan">averyfacebook</span>
					</a>
					<a className="Block_IconGroup" target="_blank" href="https://twitter.com/Avxry?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
						<Icon className="IconGroup" path={mdiTwitter}></Icon>
						<span className="IconSpan">averytwitter</span>
					</a>
					<a className="Block_IconGroup" target="_blank" href="https://www.instagram.com/avery/">
						<Icon className="IconGroup" path={mdiInstagram}></Icon>
						<span className="IconSpan">averyinstagram</span>
					</a>
					<a className="Block_IconGroup" target="_blank" href="https://github.com/avery">
						<Icon className="IconGroup" path={mdiGithub}></Icon>
						<span className="IconSpan">averygithub</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default LateralPonel;