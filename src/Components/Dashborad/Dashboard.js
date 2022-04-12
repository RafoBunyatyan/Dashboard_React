import React from "react";
import "./Dashboard.css";
import LateralPonel from "../LateralPonel/LateralPonel";
import Header from "../Header/Header";

function Dashboard() {
	return (
		<>
			<div className="MyContainer">
				<LateralPonel />
				<Header />
			</div>
	
		</>
	);
};

export default Dashboard;