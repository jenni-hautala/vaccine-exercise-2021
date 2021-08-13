import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';

// Importing components
import { getVaccinations } from './actions/actions';
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
			document.querySelector('header').classList.add('shrink');
		} else {
			document.querySelector('header').classList.remove('shrink');
		}
	};

	// Variables
	const today = toISOStringLocal(new Date());
	const [date, setDate] = useState(today);
	const dispatch = useDispatch();
	// const orderData = [
	// 	{
	// 		name: "Zerpfy",
	// 		amount: 5000
	// 	},
	// 	{
	// 		name: "Antiqua",
	// 		amount: 500
	// 	},
	// 	{
	// 		name: "SolarBuddhica",
	// 		amount: 1500
	// 	}
	// ]


	// UseEffect
	useEffect(() => {
		dispatch(getVaccinations());
	}, [dispatch]);


	return (
		<div className="App">
			<header>
				<h1>Vaccination database</h1>
				<div className="centered-box">
					<label className="h2" htmlFor="chosenDay">Choose a day:</label>
					<input onChange={dateHandler} type="datetime-local" id="chosenDay"
							name="chosenDay" value={date}
							min="2021-01-01T00:00" max={today} />
				</div>
			</header>
			<main>
				<Orders
					date={date}
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
