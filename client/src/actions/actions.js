import * as api from '../api';

/**
 * Action creators for vaccinations
 */
export const getVaccinations = () => async (dispatch) => {
	try {
		const { data } = await api.fetchVaccinations();

		console.log(data.vaccInfos)
		console.log(data.antiquaOrders)
		console.log(data.solarBuddhicaOrders)
		console.log(data.zerpfyOrders)

		dispatch({ type: 'FETCH_VACCINATIONS', payload: data.vaccInfos});
		dispatch({ type: 'FETCH_ANTIQUA', payload: data.antiquaOrders});
		dispatch({ type: 'FETCH_SOLARBUDDHICA', payload: data.solarBuddhicaOrders});
		dispatch({ type: 'FETCH_ZERPFY', payload: data.zerpfyOrders});
	} catch (error) {
		console.log(error.message);
	}
}
