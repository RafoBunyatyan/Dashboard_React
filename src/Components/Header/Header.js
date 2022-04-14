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

	// useEffect(() => {
	// 	setChange(JSON.parse(localStorage.getItem('change')))
	// }, [])

	// useEffect(() => {
	// 	localStorage.setItem('change', JSON.stringify(change));
	// })

	// const addEmployee = (FULLNAME, BIRTHDAY, GENDER, NITIONALITY, ADDRESS) => {
	// 	setChange([...change, { id: 1, FULLNAME, BIRTHDAY, GENDER, NITIONALITY, ADDRESS }])
	// }

	let a = JSON.parse(localStorage.getItem('value'));
	let b = JSON.parse(localStorage.getItem('value1'));
	let c = JSON.parse(localStorage.getItem('value2'));
	let d = JSON.parse(localStorage.getItem('value3'));
	let e = JSON.parse(localStorage.getItem('value4'));

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
							<li className="personal_Item">fullname {a}</li>
							<li className="personal_Item">birthday{b}</li>
							<li className="personal_Item">gender{c}</li>
							<li className="personal_Item">nitionality{d}</li>
							<li className="personal_Item">address{e}</li>
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
	)
}

export default Header;