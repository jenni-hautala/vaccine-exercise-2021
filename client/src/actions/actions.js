import * as api from '../api';
import { FETCH_VACCINATIONS, FETCH_ANTIQUA, FETCH_SOLARBUDDHICA, FETCH_ZERPFY } from '../constants/actionTypes';

/**
 * Hide loader
 */
	const hideLoader = () => {
	document.querySelector('.spinner-bg').classList.add('hide');
}

/**
 * Action creators for vaccinations
 */
export const getVaccinations = () => async (dispatch) => {
	try {
		const { data } = await api.fetchVaccinations();

		dispatch({ type: FETCH_VACCINATIONS, payload: data.vaccInfos});
		dispatch({ type: FETCH_ANTIQUA, payload: data.antiquaOrders});
		dispatch({ type: FETCH_SOLARBUDDHICA, payload: data.solarBuddhicaOrders});
		dispatch({ type: FETCH_ZERPFY, payload: data.zerpfyOrders});
		hideLoader();
	} catch (error) {
		console.log(error);
	}
}
