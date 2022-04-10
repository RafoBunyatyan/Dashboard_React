import React, { useState } from "react";
import "./Personal_Information.css";

function Personal_Information() {
	const [showOpen, etShowOpen] = useState([
		{ id: 1, fullname: '', birthday: '', gender: '', nitionality: '', address: '' },

	]);

	const hendleClick = () => {
		
	}

	return (
		<>
			<form className="Personal_Information" onSubmit={(e) => {
				e.preventDefault();

			}} >
				<label className="input" type="text" />
				<label className="input" type="text" />
			</form>
		</>
	);
};

export default Personal_Information;