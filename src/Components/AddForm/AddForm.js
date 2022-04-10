import React, { useState } from "react";
import "./AddForm.css";

function AddForm() {
	const [showOpen, etShowOpen] = useState("");

	const hendleClick = () => {
		
	}

	return (
		<>
			<form className="AddForm" onSubmit={(e) => {
				e.preventDefault();

			}} >
				<label className="input" type="text" />
				<label className="input" type="text" />
			</form>
		</>
	);
};

export default AddForm;