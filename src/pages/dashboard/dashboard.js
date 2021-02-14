import React from "react";
import firebase from "../../database/firebase.config";
import { useState, useEffect } from "react";

import "./dashboard.scss";
import StatusAmount from "../../components/status box/status-amount";

function Dashboard() {
	const [boardStatus, setBoardStatus] = useState([]);

	//getting data from cloud firestore
	const ref = firebase.firestore().collection("dashBoardStatus");

	function getStatusDashBoard() {
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});

			setBoardStatus(items); //transfer data to setBoard status
		});
	}

	useEffect(() => {
		getStatusDashBoard();
	}, []);

	return (
		<>
			<div className='remaining-balance-box'>
				{boardStatus.map(({ id, ...otherAmounts }) => (
					<StatusAmount key={id} {...otherAmounts} />
				))}
			</div>
		</>
	);
}

export default Dashboard;
