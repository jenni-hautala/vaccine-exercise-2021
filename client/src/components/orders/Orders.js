import React from "react";
import { useSelector } from 'react-redux';
// Import Cmponents
import Order from "./Order";

function Orders({ date }) {
	const zerpfyOrders = useSelector((state) => state.zerpfyOrders);
	const today = new Date(date);
	const filterByArrived = arr => arr.filter(({ arrived }) => new Date(arrived) < today);
	const filteredZerpfy = (filterByArrived(zerpfyOrders));
	const ordersTotal = filteredZerpfy.length;

	// Counting numbers
	/**
	 * Animate order numbers, count from 0 to total
	 */
	const counters = document.querySelectorAll('.js-OrderNum');
	console.log(counters)
	counters.forEach( counter => {
		const animate = () => {
			const value = +counter.getAttribute('data-orders');
			const data = +counter.innerText;

			const time = value / 250;

			if(data < value) {
				counter.innerText = Math.ceil(data + time);
				setTimeout(animate, 1);
			} else {
				counter.innerText = value;
			}
		}
   		animate();
	});

	const orders = [
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

	return(
		<div className="Orders container">
			<h2>Orders</h2>
			<div className="Orders__All">
				<div data-orders={ordersTotal} className="js-OrderNum Orders__BlockNumber">{ordersTotal}</div>
				<h3 className="Orders__BlockTitle">vaccines ordered in total</h3>
			</div>
			<div className="Orders__Row">
				{orders.map(order => {
					return <Order
						orderAmount={order.amount}
						orderName={order.name}
					/>
				})}
			</div>
		</div>
	);
}

export default Orders;