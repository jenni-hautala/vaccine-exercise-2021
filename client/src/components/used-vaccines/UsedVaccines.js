import React from "react";
import { useSelector } from 'react-redux';

function UsedVaccines() {
	const vaccinations = useSelector((state) => state.vaccinations);
	const today = new Date('2021-03-02T10:09:08Z');
	console.log(today)
	const filterByExpiration = arr => arr.filter(({ vaccinationDate }) => new Date(vaccinationDate) > today);
	const used = (filterByExpiration(vaccinations)).length;
	const usedP = Math.floor(used / vaccinations.length * 100);
	const unUsed = vaccinations.length - used;
	const unUsedP = 100 - usedP;

	// Functions


	console.log(vaccinations.length);

	return(
	<div className="UsedVaccines container">
		<h2>Vaccines used and to be used</h2>
		<div className="UsedVaccines row">
			<div className="UsedVaccines__Bar col">
				<div className="UsedVaccines__Bar__Used" style={{height: `${usedP}%`}}>{usedP}% Used</div>
				<div className="UsedVaccines__Bar__Unused" style={{height: `${unUsedP}%`}}>{unUsedP}% Unused</div>
			</div>
			<div className="UsedVaccines__Info col">
		There are <span className="text-highlight">{vaccinations.length}</span> orders for vaccinations all together. <span className="text-highlight">{used}</span> of them have already been used and <span className="text-highlight">{unUsed}</span> will be used in the future.
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