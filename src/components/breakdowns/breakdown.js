import "./breakdown.scss";

function Breakdown({
	amount_paid,
	currentMonth_balance,
	new_balance,
	paid_date,
}) {
	return (
		<div className='payment-history'>
			<div className='breakdown'>
				<h5 className='date'>{paid_date}</h5>

				<div className='current-balance'>
					<h4 className='current-balance'>{currentMonth_balance}</h4>
					<span>current balance</span>
				</div>

				<div className='amount-paid'>
					<h4 className='amount-paid'>{amount_paid}</h4>
					<span>amount paid</span>
				</div>

				<div className='remaining-balance'>
					<h4 className='new-balance'>{new_balance}</h4>
					<span>new balance</span>
				</div>
			</div>
		</div>
	);
}

export default Breakdown;
