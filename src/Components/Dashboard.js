import React from "react";
import "../assets/styles/dashboard.css";
import LateralPonel from "./LateralPonel";
import Header from "./Header";

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