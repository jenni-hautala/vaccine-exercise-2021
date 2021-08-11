import React, { useState } from 'react';

function DateInput() {
	const today = toISOStringLocal(new Date());
	const [date, setDate] = useState(today);

	// Functions
	/**
	 * Handler for chosen date input
	 * @param {*} e input value
	 */
	 function dateHandler(e) {
		setDate(e.target.value);
	}
	/**
	 * Return an ISO 8601 string without timezone
	 * @param {*} date original date format
	 * @returns {string} current timezone's date
	 */
	function toISOStringLocal(date) {
		function z(n){return (n<10?'0':'') + n}
		return date.getFullYear() + '-' + z(date.getMonth()+1) + '-' +
			z(date.getDate()) + 'T' + z(date.getHours()) + ':' +
			z(date.getMinutes()) + ':' + z(date.getSeconds());
	}

	return(
	<div className="centered-box">
		<label className="h2" htmlFor="chosenDay">Choose a day:</label>
		<input onChange={dateHandler} type="datetime-local" id="chosenDay"
				name="chosenDay" value={date}
				min="2021-01-01T00:00" max="2021-05-31T23:59" />
	</div>
	);
}

export default DateInput;