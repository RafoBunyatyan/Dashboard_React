import React, { useState } from "react";
import Icon, { Stack } from '@mdi/react';
import { mdiAccount, mdiPencil, mdiPoll } from '@mdi/js';
import "./Header.css";
import EmployeeContext from "../EmployeeContext/EmployeeContext";

function Header() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<EmployeeContext handleClose={handleClose} show={show} />
			<div className="header">
				<div className="header_blockUser">
					<div className="header_personalEdit">
						<div className="personal_Icon">
							<Icon className="IconMdi" path={mdiAccount}></Icon>
							<span className="personalText">Personal Information</span>
						</div>
						<a className="personal_Edit" title="Edit" onClick={handleShow}>
							<Icon className="IconMdi" path={mdiPencil}></Icon>
						</a>
					</div>
					<div className="personal_Information">
						<ul className="personal_grup">
							<li className="personal_Item">fullname</li>
							<li className="personal_Item">birthday</li>
							<li className="personal_Item">gender</li>
							<li className="personal_Item">nitionality</li>
							<li className="personal_Item">address</li>
						</ul>
					</div>
				</div>
				<div className="header_blockPoll">
					<div className="header_personalEdit">
						<div className="personal_Icon">
							<Icon className="IconPoll" path={mdiPoll}></Icon>
							<span className="personalText">About My</span>
						</div>
						<a className="personal_Edit" title="Edit">
							<Icon className="IconMdi" path={mdiPencil}></Icon>
						</a>
					</div>
					<div className="personal_Information">
						<ul className="personal_grup">
								<li className="personal_Item">employment</li>
								<li className="personal_Item">education</li>
								<li className="personal_Item">skills</li>
								<li className="personal_Item">language</li>
								<li className="personal_Item">hobbies</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;