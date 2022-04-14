import React, { useEffect, useState } from "react";
import "./EmployeeForm.css";
import { Button, Form, Modal } from "react-bootstrap";

function EmployeeForm(props) {
	const [value, setValue] = useState("")
	const [value1, setValue1] = useState("")
	const [value2, setValue2] = useState("")
	const [value3, setValue3] = useState("")
	const [value4, setValue4] = useState("")

	useEffect(() => {
		localStorage.setItem('value', JSON.stringify(value))
	}, [value])

	useEffect(() => {
		localStorage.setItem('value1', JSON.stringify(value1))
	}, [value1])

	useEffect(() => {
		localStorage.setItem('value2', JSON.stringify(value2))
	}, [value2])

	useEffect(() => {
		localStorage.setItem('value3', JSON.stringify(value3))
	}, [value3])

	useEffect(() => {
		localStorage.setItem('value4', JSON.stringify(value4))
	}, [value4])

	// const [change, setChange] = useState([
	// 	{ id: 1, FULLNAME: "", BIRTHDAY: "", GENDER: "", NITIONALITY: "", ADDRESS: "" }
	// ]);

	// const addEmployee = (FULLNAME, BIRTHDAY, GENDER, NITIONALITY, ADDRESS) => {
	// 	setChange([...change, { id: 1, FULLNAME, BIRTHDAY, GENDER, NITIONALITY, ADDRESS }])
	// }

	return (
		<>
			<Modal show={props.showForm} onHide={props.handleFormClose} >
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="Form_Grup" controlId="exampleForm.ControlInput1">
							<Form.Label className="Label">FULLNAME</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setValue(evt.target.value)
							}} />
							<Form.Label className="Label">BIRTHDAY</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setValue1(evt.target.value)
							}} />
							<Form.Label className="Label">GENDER</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setValue2(evt.target.value)
							}} />
							<Form.Label className="Label">NITIONALITY</Form.Label>
							<Form.Control type="text" autoFocus name="value" onChange={(evt) => {
								setValue3(evt.target.value)
							}} />
							<Form.Label className="Label">ADDRESS</Form.Label>
							<Form.Control type="text" autoFocus onChange={(evt) => {
								setValue4(evt.target.value)
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