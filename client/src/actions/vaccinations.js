import * as api from '../api';

// Action Creators
export const getVaccinations = () => async (dispatch) => {
	try {
		const { data } = await api.fetchVaccinations();

		dispatch({ type: 'FETCH_ALL', payload: data});
	} catch (error) {
		console.log(error.message);
	}
}

// export const createPost = (post) => async (dispatch) => {
// 	try {
// 		const { data } = await api.createPost(post);

// 		dispatch({ type: 'CREATE', payload: data });
// 	} catch (error) {
// 		console.log(error);
// 	}
// }