import React, { useEffect, useState } from "react";
import "./EmployeeContext.css";
import { Button, Form, Modal } from "react-bootstrap";

function EmployeeContext({ handleClose, show  }){

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label className="Label">FULLNAME</Form.Label>
							<Form.Control type="text" autoFocus />
							<Form.Label className="Label">BIRTHDAY</Form.Label>
							<Form.Control	type="text" autoFocus	/>
							<Form.Label className="Label">GENDER</Form.Label>
							<Form.Control type="text" autoFocus />
							<Form.Label className="Label">NITIONALITY</Form.Label>
							<Form.Control type="text" autoFocus />
							<Form.Label className="Label">ADDRESS</Form.Label>
							<Form.Control type="text" autoFocus />
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default EmployeeContext;