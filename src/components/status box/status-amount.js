import AnimatedNumber from "react-animated-number";

import "./status-amount.scss";

function StatusAmount({ current_balance, total_payments, total_obligation }) {
	return (
		<>
			<div className='current-balance amounts'>
				<span>current balance</span>
				<h2 className='total-balance'>
					<AnimatedNumber
						value={current_balance}
						formatValue={(value) => `₱ ${value.toFixed(2)}`}
						duration={400}
						style={{ fontSize: 20, color: "#2f2fa1" }}
					/>
				</h2>
			</div>

			<div className='total-payments amounts'>
				<span>total payments</span>
				<h2 className='total-payments'>
					<AnimatedNumber
						value={total_payments}
						formatValue={(value) => `₱ ${value.toFixed(2)}`}
						duration={400}
						style={{ fontSize: 20, color: "#5eda96" }}
					/>
				</h2>
			</div>

			<div className='total-amount-obligation amounts'>
				<span>total obligation</span>
				<h2 className='total-obligation'>
					<AnimatedNumber
						value={total_obligation}
						formatValue={(value) => `₱ ${value.toFixed(2)}`}
						duration={400}
						style={{ fontSize: 20, color: "#f64c71" }}
					/>
				</h2>
			</div>
		</>
	);
}

export default StatusAmount;
