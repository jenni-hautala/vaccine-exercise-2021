import { FETCH_ZERPFY } from '../constants/actionTypes';


/**
 * Reducer for Zerpfy orders
 */

const zerpfyReducer = (zerpfyOrders = [], action) => {
	switch (action.type) {
		case FETCH_ZERPFY:
			return action.payload;
		default:
			return zerpfyOrders;
	}
}

export default zerpfyReducer;
