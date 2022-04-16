import React, { useEffect, useState } from "react";
import "./EmployeeForm.css";
import { Button, Form, Modal } from "react-bootstrap";

function EmployeeForm(props) {
	const [fullName, setFullName] = useState([])
	const [birthday, setBirthday] = useState([])
	const [gender, setGender] = useState([])
	const [nationality, setNationality] = useState([])
	const [address, setAddress] = useState([])

	useEffect(() => {
		localStorage.setItem('fullName', JSON.stringify(fullName))
	}, [fullName])

	useEffect(() => {
		localStorage.setItem('birthday', JSON.stringify(birthday))
	}, [birthday])

	useEffect(() => {
		localStorage.setItem('gender', JSON.stringify(gender))
	}, [gender])

	useEffect(() => {
		localStorage.setItem('nationality', JSON.stringify(nationality))
	}, [nationality])

	useEffect(() => {
		localStorage.setItem('address', JSON.stringify(address))
	}, [address])

	return (
		<>
			<Modal show={props.showForm} onHide={props.handleFormClose} >
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="Form_Grup" controlId="exampleForm.ControlInput1">
							<Form.Label className="Label">FULLNAME</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setFullName(evt.target.value)
							}} />
							<Form.Label className="Label">BIRTHDAY</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setBirthday(evt.target.value)
							}} />
							<Form.Label className="Label">GENDER</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setGender(evt.target.value)
							}} />
							<Form.Label className="Label">NITIONALITY</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setNationality(evt.target.value)
							}} />
							<Form.Label className="Label">ADDRESS</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setAddress(evt.target.value)
							}} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button className="button_borders" variant="primary" onClick={props.handleFormClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default EmployeeForm;