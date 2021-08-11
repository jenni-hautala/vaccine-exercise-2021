import React from "react";
// Import Cmponents
import Order from "./Order";

function Orders({ orders }) {
	// Variables
	const counters = document.querySelectorAll('.js-OrderNum');

	// Functions
	/**
	 * Animate order numbers, count from 0 to total
	 */
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

	return(
		<div className="Orders container">
			<h2>Orders</h2>
			<div className="Orders__All">
				<div data-orders="7000" className="js-OrderNum Orders__BlockNumber">0</div>
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