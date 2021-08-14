import { FETCH_ANTIQUA } from '../constants/actionTypes';

/**
 * Reducer for Antiqua orders
 */
const antiquaReducer = (antiquaOrders = [], action) => {
	switch (action.type) {
		case FETCH_ANTIQUA:
			return action.payload;
		default:
			return antiquaOrders;
	}
}

export default antiquaReducer;
