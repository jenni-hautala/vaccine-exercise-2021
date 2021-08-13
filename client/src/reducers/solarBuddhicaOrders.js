/**
 * Reducer for SolarBuddhica orders
 */

const solarBuddhicaReducer = (solarBuddhicaOrders = [], action) => {
	switch (action.type) {
		case 'FETCH_SOLARBUDDHICA':
			return action.payload;
		default:
			return solarBuddhicaOrders;
	}
}

export default solarBuddhicaReducer;
