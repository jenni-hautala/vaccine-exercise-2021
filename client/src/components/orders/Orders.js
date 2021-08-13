import React from "react";
import { useSelector } from 'react-redux';
// Import Cmponents
import Order from "./Order";

function Orders({ date }) {
	// Vaccination order data
	const antiquaOrders = useSelector((state) => state.antiquaOrders);
	const solarBuddhicaOrders = useSelector((state) => state.solarBuddhicaOrders);
	const zerpfyOrders = useSelector((state) => state.zerpfyOrders);

	// Filtering the orders
	const today = new Date(date);
	const filterByArrived = arr => arr.filter(({ arrived }) => new Date(arrived) < today);
	const filteredAntiqua = (filterByArrived(antiquaOrders));
	const filteredSolarBuddhica = (filterByArrived(solarBuddhicaOrders));
	const filteredZerpfy = (filterByArrived(zerpfyOrders));

	// Data for the components
	const ordersLists = [filteredAntiqua, filteredSolarBuddhica, filteredZerpfy]
	const ordersTotal = filteredAntiqua.length + filteredSolarBuddhica.length + filteredZerpfy.length;

	return(
		<div className="Orders container">
			<h2>Orders</h2>
			<div className="Orders__All">
				<div data-orders={ordersTotal} className="js-OrderNum Orders__BlockNumber">{ordersTotal}</div>
				<h3 className="Orders__BlockTitle">vaccines ordered in total</h3>
			</div>
			<div className="Orders__Row">
				{ordersLists.map((orders, index) => {
					const key = `OrderArray ${index}`;
					return <Order key={key} orders={orders}/>
				})}
			</div>
		</div>
	);
}

export default Orders;