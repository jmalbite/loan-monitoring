import React from "react";
import "./dashboard.scss";

function Dashboard() {
	return (
		<>
			<div className='remaining-balance-box'>
				<div className='current-balance amounts'>
					<span>current balance</span>
					<h2 className='total-balance'>₱7100</h2>
				</div>

				<div className='total-payments amounts'>
					<span>total payments</span>
					<h2 className='total-payments'>₱500</h2>
				</div>

				<div className='total-amount-obligation amounts'>
					<span>total obligation</span>
					<h2 className='total-obligation'>₱7200</h2>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
