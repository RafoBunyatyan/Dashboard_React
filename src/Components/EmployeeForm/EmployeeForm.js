import React, { useEffect, useState } from "react";
import "./EmployeeForm.css";
import { Button, Form, Modal } from "react-bootstrap";


function EmployeeForm(props){


	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	return (
		<>
			<Button variant="primary" onClick={handleShow}>
			Open Form
			</Button>

			<Modal show={show} onHide={handleClose} >
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="Form_Grup" controlId="exampleForm.ControlInput1">
							<Form.Label className="Label">asd  </Form.Label>
							<Form.Control type="text" required autoFocus />
							<Form.Label className="Label">BIRTHDAY  </Form.Label>
							<Form.Control type="text" required autoFocus />
							<Form.Label className="Label">GENDER  </Form.Label>
							<Form.Control type="text" required autoFocus />
							<Form.Label className="Label">NITIONALITY  </Form.Label>
							<Form.Control type="text" required autoFocus />
							<Form.Label className="Label">ADDRESS  </Form.Label>
							<Form.Control type="text" required autoFocus />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button className="button_borders" variant="primary" onClick={() => console.log("event")}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default EmployeeForm;






