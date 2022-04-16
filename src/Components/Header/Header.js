import React, { useState, useEffect } from "react";
import Icon, { Stack } from '@mdi/react';
import { mdiAccount, mdiPencil, mdiPoll } from '@mdi/js';
import "./Header.css";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import EmployeeAbout from "../EmployeeAbout/EmployeeAbout";

function Header() {
	const [showForm, setShowForm] = useState(false);
	const handleFormClose = () => setShowForm(false);
	const handleFormShow = () => setShowForm(true);

	const [showAbout, setShowAbout] = useState(false);
	const handleAboutClose = () => setShowAbout(false);
	const handleAboutShow = () => setShowAbout(true);

	// const [change, setChange] = useState([
	// 	{ id: 1, FULLNAME: "", BIRTHDAY: "", GENDER: "", NITIONALITY: "", ADDRESS: "" }
	// ]);

	// const addEmployee = (FULLNAME, BIRTHDAY, GENDER, NITIONALITY, ADDRESS) => {
	// 	setChange([...change, { id: 1, FULLNAME, BIRTHDAY, GENDER, NITIONALITY, ADDRESS }])
	// }

	let array = [
		JSON.parse(localStorage.getItem('fullName')),
		JSON.parse(localStorage.getItem('birthday')),
		JSON.parse(localStorage.getItem('gender')),
		JSON.parse(localStorage.getItem('nationality')),
		JSON.parse(localStorage.getItem('address')),
		JSON.parse(localStorage.getItem('employment')),
		JSON.parse(localStorage.getItem('education')),
		JSON.parse(localStorage.getItem('skills')),
		JSON.parse(localStorage.getItem('language')),
		JSON.parse(localStorage.getItem('hobbies')),
	]

	return (
		<>
			<EmployeeForm showForm={showForm} handleFormClose={handleFormClose} />
			<EmployeeAbout showAbout={showAbout} handleAboutClose={handleAboutClose} />
			<div className="header">
				<div className="header_blockUser">
					<div className="header_personalEdit">
						<div className="personal_Icon">
							<Icon className="IconMdi" path={mdiAccount}></Icon>
							<span className="personalText">Personal Information</span>
						</div>
						<a className="personal_Edit" title="Edit" onClick={handleFormShow}>
							<Icon className="IconMdi" path={mdiPencil}></Icon>
						</a>
					</div>
					<div className="personal_Information">
						<ul className="personal_grup">
							<li className="personal_Item">
								<span className="personal_Item_span">fullname</span>
								<span className="personal_Item_value">{array[0]}</span>
							</li>
							<li className="personal_Item">
								<span className="personal_Item_span">birthday</span>
								<span className="personal_Item_value">{array[1]}</span>
							</li>
							<li className="personal_Item">
								<span className="personal_Item_span">gender</span>
								<span className="personal_Item_value">{array[2]}</span>
							</li>
							<li className="personal_Item">
								<span className="personal_Item_span">nitionality</span>
								<span className="personal_Item_value">{array[3]}</span>
							</li>
							<li className="personal_Item">
								<span className="personal_Item_span">address</span>
								<span className="personal_Item_value">{array[4]}</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="header_blockPoll">
					<div className="header_personalEdit">
						<div className="personal_Icon">
							<Icon className="IconPoll" path={mdiPoll}></Icon>
							<span className="personalText">About My</span>
						</div>
						<a className="personal_Edit" title="Edit" onClick={handleAboutShow}>
							<Icon className="IconMdi" path={mdiPencil}></Icon>
						</a>
					</div>
					<div className="personal_Information">
						<ul className="personal_grup">
							<li className="personal_Item">
								<span className="personal_Item_span">employment</span>
								<span className="personal_Item_value">{array[5]}</span>
							</li>
							<li className="personal_Item">
								<span className="personal_Item_span">education</span>
								<span className="personal_Item_value">{array[6]}</span>
							</li>
							<li className="personal_Item">
								<span className="personal_Item_span">skills</span>
								<span className="personal_Item_value">{array[7]}</span>
							</li>
							<li className="personal_Item">
								<span className="personal_Item_span">language</span>
								<span className="personal_Item_value">{array[8]}</span>
							</li>
							<li className="personal_Item">
								<span className="personal_Item_span">hobbies</span>
								<span className="personal_Item_value">{array[9]}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;