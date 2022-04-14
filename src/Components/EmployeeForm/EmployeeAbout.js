import React, { useState } from "react";
import "./EmployeeForm.css";
import { Button, Form, Modal } from "react-bootstrap";

function EmployeeAbout(props) {


	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
			   Open About
			</Button>

			<Modal show={show} onHide={handleClose} >
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="Form_Grup" controlId="exampleForm.ControlInput1">
							<Form.Label className="Label">EMPLOYMENT</Form.Label>
							<Form.Control type="text" required autoFocus />
							<Form.Label className="Label">EDUCATION</Form.Label>
							<Form.Control type="text" required autoFocus />
							<Form.Label className="Label">SKILLS</Form.Label>
							<Form.Control type="text" required autoFocus />
							<Form.Label className="Label">LANGUAGE</Form.Label>
							<Form.Control type="text" required autoFocus />
							<Form.Label className="Label">HOBBIES</Form.Label>
							<Form.Control type="text" required autoFocus />
						</Form.Group>

					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button className="button_borders" variant="primary" onClick={props.closeOpenAboutModal}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default EmployeeAbout;






