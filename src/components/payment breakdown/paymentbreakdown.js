import Breakdown from "../breakdowns/breakdown";
import "./paymentbreakdown.scss";
import { useState, useEffect } from "react";

import firebase from "../../database/firebase.config";

function Paymentbreakdown() {
	const [paymentHistory, setPaymentHistory] = useState([]);

	const db = firebase.firestore().collection("paymentBreakdown");

	function getPaymentHistory() {
		db.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push({ ...doc.data(), id: doc.id });
			});
			setPaymentHistory(items);
		});
	}

	useEffect(() => {
		getPaymentHistory();
	}, []);

	return (
		<>
			<div className='payment-breakdowns'>
				<h2>payment history</h2>
				{paymentHistory.map(({ id, ...history }) => (
					<Breakdown key={id} {...history} />
				))}
			</div>
		</>
	);
}

export default Paymentbreakdown;
