import React, { useState, useEffect } from "react";
import Icon, { Stack } from '@mdi/react';
import { mdiAccount, mdiPencil, mdiPoll } from '@mdi/js';
import "./Header.css";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import EmployeeAbout from "../EmployeeForm/EmployeeAbout";

function Header() {
	// const [change, setChange] = useState([
	// 	{ id: uuidv4(), FULLNAME: "", BIRTHDAY: "", GENDER: "", NITIONALITY: "", ADDRESS: ""  }
	// ]);

	// useEffect(() => {
	// 	setChange(JSON.parse(localStorage.getItem('change')))
	// }, [])


	// useEffect(() => {
	// 	localStorage.setItem('change', JSON.stringify(change));
	// })

	// cons t addEmployee = (FULLNAME, BIRTHDAY, GENDER, NITIONALITY, ADDRESS) => {
	// 	setChange([...change, { id: uuidv4(), FULLNAME, BIRTHDAY, GENDER, NITIONALITY, ADDRESS  }])
	// }
	
	return (
		<>	
			<div className="header">
				<div className="header_blockUser">
					<div className="header_personalEdit">
						<div className="personal_Icon">
							<Icon className="IconMdi" path={mdiAccount}></Icon>
							<span className="personalText">Personal Information</span>
						</div>
						{/* <a className="personal_Edit" title="Edit" onClick={handleOpenFormModal}>
							<Icon className="IconMdi" path={mdiPencil}></Icon>
						</a> */}
						<EmployeeForm/>
					</div>
					<div className="personal_Information">
						<ul className="personal_grup">
							<li className="personal_Item">fullname {  }</li>
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
						{/* <a className="personal_Edit" title="Edit" onClick={handleOpenAboutModal}>
							<Icon className="IconMdi" path={mdiPencil}></Icon>
						</a> */}
						<EmployeeAbout/>
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