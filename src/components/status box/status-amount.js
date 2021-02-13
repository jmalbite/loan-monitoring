import "./status-amount.scss";

function StatusAmount({ currentBalance, totalObligation, totalPayments }) {
	return (
		<>
			<div className='current-balance amounts'>
				<span>{currentBalance}</span>
				<h2 className='total-balance'>₱7100</h2>
			</div>

			<div className='total-payments amounts'>
				<span>{totalPayments}</span>
				<h2 className='total-payments'>₱500</h2>
			</div>

			<div className='total-amount-obligation amounts'>
				<span>{totalObligation}</span>
				<h2 className='total-obligation'>₱7200</h2>
			</div>
		</>
	);
}

export default StatusAmount;
