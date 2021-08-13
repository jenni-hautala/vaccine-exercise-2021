import React from "react";

function Order({ orders }) {
	let vaccineName = "";
	let injectionAmount = 0;

	if (orders.length) {
		/**
		 * Checking the name of ordered vaccine
		 */
		vaccineName = orders[0].vaccine;
		const vaccineNameList = orders.filter(order => order.vaccine === vaccineName);
		if (vaccineNameList.length !== orders.length) {
			vaccineName = `${vaccineName} and some other`;
		}

		/**
		 * The amount of injections in the orders
		 */
		injectionAmount = (orders.map(order => order.injections)).reduce((a, b) => a + b, 0);
	}


	return(
		<div className="Orders__Block">
			<div data-orders={orders.length} className="Orders__BlockNumber">{orders.length}</div>
			<h4 className="Orders__BlockTitle">{vaccineName} vaccine orders</h4>
			<p> Including <strong>{injectionAmount}</strong> injections</p>
		</div>
	);
}

export default Order;