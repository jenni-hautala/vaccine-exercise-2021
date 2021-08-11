import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
// Importing components
import { getVaccinations } from './actions/vaccinations';
import DateInput from "./components/date-input/DateInput";
import Orders from "./components/orders/Orders";
import ExpiringVaccines from "./components/expiring-vaccines/ExpiringVaccines";
import UsedVaccines from "./components/used-vaccines/UsedVaccines";

function App() {
	// Variables
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

	// Functions

	return (
		<div className="App">
			<header>
				<h1>Vaccination database</h1>
			</header>
			<main>
				<DateInput/>
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
