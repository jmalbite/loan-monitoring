import React from "react";
import firebase from "../../database/firebase.config";
import { useState, useEffect } from "react";

import "./dashboard.scss";
import StatusAmount from "../../components/status box/status-amount";

function Dashboard() {
	const [boardStatus, setBoardStatus] = useState([]);

	//getting data from cloud firestore
	const ref = firebase.firestore().collection("dashBoardStatus");
	console.log(ref); //display data reference

	function getStatusDashBoard() {
		ref.onSnapshot((querySnapshot) => {
			const items = [];

			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});

			setBoardStatus(items);
		});
	}

	useEffect(() => {
		getStatusDashBoard();
	}, []);

	return (
		<>
			<div className='remaining-balance-box'>
				{boardStatus.map((amounts) => (
					<h1>{amounts.current_balance}</h1>
				))}
			</div>
		</>
	);
}

export default Dashboard;
