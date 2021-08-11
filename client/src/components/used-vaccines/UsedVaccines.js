import React from "react";
import { useSelector } from 'react-redux';

function UsedVaccines() {
	const vaccinations = useSelector((state) => state.vaccinations);
	const today = new Date('2021-03-02T10:09:08Z');
	console.log(today)
	const filterByExpiration = arr => arr.filter(({ vaccinationDate }) => new Date(vaccinationDate) > today);
	const used = (filterByExpiration(vaccinations)).length;
	// const usedP = used / vaccinations.length * 100;
	const unUsed = vaccinations.length - used;
	// const unUsedP = unUsed / vaccinations.length * 100;

	// Functions


	console.log(vaccinations.length);

	return(
	<div className="UsedVaccines container">
		<h2>Vaccines used and to be used</h2>
		<div className="UsedVaccines row">
			<div className="UsedVaccines__Bar col">
				<div className="UsedVaccines__Bar__Used">{Math.floor(used / vaccinations.length * 100)}% Used</div>
				<div className="UsedVaccines__Bar__Unused">{Math.floor(unUsed / vaccinations.length * 100)}% Unused</div>
			</div>
			<div className="UsedVaccines__Info col">
		There are <span className="text-lg">{vaccinations.length}</span> vaccinations to be used. <span className="text-lg">{used}</span> of them have already been used and <span className="text-lg">{unUsed}</span> will be used in the future.`
			</div>
		</div>
		<div className="UsedVaccines row">
			<div className="UsedVaccines__Info col">
			</div>
			<div className="UsedVaccines__Bar col">
			</div>
		</div>
	</div>
	);
}

export default UsedVaccines;