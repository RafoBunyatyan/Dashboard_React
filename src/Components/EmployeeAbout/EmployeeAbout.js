import React, { useState, useEffect } from "react";
import "../EmployeeForm/EmployeeForm.css";
import { Button, Form, Modal } from "react-bootstrap";

function EmployeeAbout(props) {
	const [employment, setEmployment] = useState([])
	const [education, setEducation] = useState([])
	const [skills, setSkills] = useState([])
	const [language, setLanguage] = useState([])
	const [hobbies, setHobbies] = useState([])

	useEffect(() => {
		localStorage.setItem('employment', JSON.stringify(employment))
	}, [employment])

	useEffect(() => {
		localStorage.setItem('education', JSON.stringify(education))
	}, [education])

	useEffect(() => {
		localStorage.setItem('skills', JSON.stringify(skills))
	}, [skills])

	useEffect(() => {
		localStorage.setItem('language', JSON.stringify(language))
	}, [language])

	useEffect(() => {
		localStorage.setItem('hobbies', JSON.stringify(hobbies))
	}, [hobbies])

	return (
		<>
			<Modal show={props.showAbout} onHide={props.handleAboutClose} >
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="Form_Grup" controlId="exampleForm.ControlInput1">
							<Form.Label className="Label">EMPLOYMENT</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setEmployment(evt.target.value)
							}} />
							<Form.Label className="Label">EDUCATION</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setEducation(evt.target.value)
							}} />
							<Form.Label className="Label">SKILLS</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setSkills(evt.target.value)
							}} />
							<Form.Label className="Label">LANGUAGE</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setLanguage(evt.target.value)
							}} />
							<Form.Label className="Label">HOBBIES</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setHobbies(evt.target.value)
							}} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button className="button_borders" variant="primary" onClick={props.handleAboutClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default EmployeeAbout;