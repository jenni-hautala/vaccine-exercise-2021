import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
// Importing components
import { getVaccinations } from './actions/vaccinations';
// import DateInput from "./components/date-input/DateInput";
import Orders from "./components/orders/Orders";
// TBA: import ExpiringVaccines from "./components/expiring-vaccines/ExpiringVaccines";
import UsedVaccines from "./components/used-vaccines/UsedVaccines";

function App() {
	// Functions
	/**
	 * Handler for chosen date input
	 * @param {*} e input value
	 */
	 const dateHandler = (e) => {
		setDate(e.target.value);
		console.log(`pvm toimii viel: ${date}`);
		// dispatch(updateDate(date));
	}
	/**
	 * Return an ISO 8601 string without timezone
	 * @param {*} date original date format
	 * @returns {string} current timezone's date
	 */
	 const toISOStringLocal = (date) => {
		function z(n){return (n<10?'0':'') + n}
		return date.getFullYear() + '-' + z(date.getMonth()+1) + '-' +
			z(date.getDate()) + 'T' + z(date.getHours()) + ':' +
			z(date.getMinutes()) + ':' + z(date.getSeconds());
	}
	/**
	 * Shrink header on scroll
	 */
	window.onscroll = () => {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			// document.querySelector('header').style.padding = "0";
			// document.querySelector('.js-header-title').style.fontSize = "30px";
			// document.querySelector('.js-header-label').style.fontSize = "20px";
			document.querySelector('header').classList.add('shrink');
		} else {
			document.querySelector('header').classList.remove('shrink');
			// document.querySelector('header').style.padding = "50px 0";
			// document.querySelector('.js-header-title').style.fontSize = "54px";
			// document.querySelector('.js-header-label').style.fontSize = "36px";
		}
	};

	// Variables
	const today = toISOStringLocal(new Date());
	const [date, setDate] = useState(today);
	const dispatch = useDispatch();
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

	// States
	// TODO: Order states
	// const [orders, setOrders] = useState(orderData);

	// UseEffect
	// Run only once
	useEffect(() => {
		dispatch(getVaccinations());
	}, [dispatch]);
	// // Run when date updates
	// useEffect(() => {
	// 	getDate();
	// }, []);


	return (
		<div className="App">
			<header>
				<h1>Vaccination database</h1>
				<div className="centered-box">
					<label className="h2" htmlFor="chosenDay">Choose a day:</label>
					<input onChange={dateHandler} type="datetime-local" id="chosenDay"
							name="chosenDay" value={date}
							min="2021-01-01T00:00" max="2021-05-31T23:59" />
				</div>
			</header>
			<main>
				<Orders
					// setOrders={setOrders}
					orders={orderData}
				/>
				{/*
					TBA:
					<ExpiringVaccines/>
				*/}
				<UsedVaccines
					date={date}
				/>
			</main>
			<footer>
			</footer>
		</div>
	);
}

export default App;
