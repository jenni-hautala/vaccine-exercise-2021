import React from "react";

function Order({ orderAmount, orderName }) {
	// Events

	return(
		<div className="Orders__Block">
			<div data-orders={orderAmount} className="js-OrderNum Orders__BlockNumber">0</div>
			<h4 className="Orders__BlockTitle">{orderName} vaccine orders</h4>
		</div>
	);
}

export default Order;