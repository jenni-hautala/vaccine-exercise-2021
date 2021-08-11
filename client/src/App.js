import React, { useState } from 'react';
import './App.scss';
// Importing components
import Orders from "./components/orders/Orders";
import ExpiringVaccines from "./components/expiring-vaccines/ExpiringVaccines";
import UsedVaccines from "./components/used-vaccines/UsedVaccines";

function App() {
	// Variables
	const orderData = [
		{
			name: "Zerpfy",
			amount: 5000
		},
		{
			name: "Antiqua",
			amount: 500
		},
		{
			name: "SolarBuddhica",
			amount: 1500
		}
	]
	const today = toISOStringLocal(new Date());

	// States
	// TODO: Order states
	// const [orders, setOrders] = useState(orderData);
	const [date, setDate] = useState(today);

	// UseEffect
	// Run only once
	// useEffect(() => {
	// }, []);
	// // Run when date updates
	// useEffect(() => {
	// 	getDate();
	// }, [todos, status]);

	// Functions
	/**
	 * Handler for chosen date input
	 * @param {*} e input value
	 */
	function dateHandler(e) {
		setDate(e.target.value);
	}
	/**
	 * Return an ISO 8601 string without timezone
	 * @param {*} date original date format
	 * @returns {string} current timezone's date
	 */
	function toISOStringLocal(date) {
		function z(n){return (n<10?'0':'') + n}
		return date.getFullYear() + '-' + z(date.getMonth()+1) + '-' +
			z(date.getDate()) + 'T' + z(date.getHours()) + ':' +
			z(date.getMinutes()) + ':' + z(date.getSeconds());
	}
	return (
		<div className="App">
			<header>
				<h1>Vaccination database</h1>
			</header>
			<main>
				<div className="centered-box">
					<label className="h2" htmlFor="chosenDay">Choose a day:</label>
					<input onChange={dateHandler} type="datetime-local" id="chosenDay"
							name="chosenDay" value={date}
							min="2021-01-01T00:00" max="2021-05-31T23:59" />
				</div>
				<Orders
					// setOrders={setOrders}
					orders={orderData}
				/>
				<ExpiringVaccines/>
				<UsedVaccines/>
			</main>
			<footer>
			</footer>
		</div>
	);
}

export default App;
