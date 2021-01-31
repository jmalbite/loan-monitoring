import React from "react";
import "./dashboard.scss";
import StatusAmount from "../../components/status box/status-amount";

function Dashboard() {
	return (
		<>
			<div className='remaining-balance-box'>
				<StatusAmount />
			</div>
		</>
	);
}

export default Dashboard;
