/**
 * Reducer for vaccinations
 */

const vaccReducer = (vaccinations = [], action) => {
	switch (action.type) {
		case 'FETCH_VACCINATIONS':
			return action.payload;
		default:
			return vaccinations;
	}
}

export default vaccReducer;
