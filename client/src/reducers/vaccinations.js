/**
 * Reducers for vaccinations and vaccinates
 */

const reducer = (vaccinations = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;
		default:
			return vaccinations;
	}
}

export default reducer;
