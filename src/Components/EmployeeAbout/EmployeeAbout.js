import React, { useState, useEffect } from "react";
import "../EmployeeForm/EmployeeForm.css";
import { Button, Form, Modal } from "react-bootstrap";

function EmployeeAbout(props) {
	const [valuee, setValuee] = useState([])
	const [value11, setValue11] = useState([])
	const [value22, setValue22] = useState([])
	const [value33, setValue33] = useState([])
	const [value44, setValue44] = useState([])

	useEffect(() => {
		localStorage.setItem('valuee', JSON.stringify(valuee))
	}, [valuee])

	useEffect(() => {
		localStorage.setItem('value11', JSON.stringify(value11))
	}, [value11])

	useEffect(() => {
		localStorage.setItem('value22', JSON.stringify(value22))
	}, [value22])

	useEffect(() => {
		localStorage.setItem('value33', JSON.stringify(value33))
	}, [value33])

	useEffect(() => {
		localStorage.setItem('value44', JSON.stringify(value44))
	}, [value44])


	return (
		<>
			<Modal show={props.showAbout} onHide={props.handleAboutClose} >
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="Form_Grup" controlId="exampleForm.ControlInput1">
							<Form.Label className="Label">EMPLOYMENT</Form.Label>
							<Form.Control type="text" autoFocus value={valuee} onChange={(evt) => {
								setValuee(evt.target.value)
							}} />
							<Form.Label className="Label">EDUCATION</Form.Label>
							<Form.Control type="text" autoFocus value={value11} onChange={(evt) => {
								setValue11(evt.target.value)
							}} />
							<Form.Label className="Label">SKILLS</Form.Label>
							<Form.Control type="text" autoFocus value={value22} onChange={(evt) => {
								setValue22(evt.target.value)
							}} />
							<Form.Label className="Label">LANGUAGE</Form.Label>
							<Form.Control type="text" autoFocus value={value33} onChange={(evt) => {
								setValue33(evt.target.value)
							}} />
							<Form.Label className="Label">HOBBIES</Form.Label>
							<Form.Control type="text" autoFocus value={value44} onChange={(evt) => {
								setValue44(evt.target.value)
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