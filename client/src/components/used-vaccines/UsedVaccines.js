/* eslint-disable no-use-before-define */
import React from "react";
import { useSelector } from 'react-redux';

function UsedVaccines({ date }) {
	const vaccinations = useSelector((state) => state.vaccinations);
	const today = new Date(date);
	const filterByExpiration = arr => arr.filter(({ vaccinationDate }) => new Date(vaccinationDate) < today);
	const filteredVaccinations = (filterByExpiration(vaccinations));
	const calcP = (a, b) => Math.floor(a / b * 100);

	// Used vaccines
	const used = filteredVaccinations.length;
	const usedP = calcP(used, vaccinations.length);
	const unUsed = vaccinations.length - used;
	const unUsedP = 100 - usedP;

	// Vaccinated genders
	const filterGenders = (gender) => {
		return (filteredVaccinations.filter(vacc => {
			return vacc.gender === gender
		})).length;
	}
	const male = filterGenders("male");
	const maleP = calcP(male, used);
	const female = filterGenders("female");
	const femaleP = calcP(female, used);
	const nonbinary = filterGenders("nonbinary");
	const nonbinaryP = 100 - maleP - femaleP;


	return(
	<div className="UsedVaccines container">
		<h2>Vaccines used and to be used</h2>
		<div className="UsedVaccines row">
			<div className="UsedVaccines__Bar col">
				{usedP > 0 ? <div className="UsedVaccines__Bar__Used" style={{height: `${usedP}%`}}>{usedP}% Used</div>: null}
				{unUsedP > 0 ? <div className="UsedVaccines__Bar__Unused" style={{height: `${unUsedP}%`}}>{unUsedP}% Unused</div>: null}
			</div>
			<div className="UsedVaccines__Info col text-lg-left">
			There are <span className="text-highlight">{vaccinations.length}</span> orders for vaccinations all together. <span className="text-highlight">{used}</span> of them have already been used and <span className="text-highlight">{unUsed}</span> of them scheduled to be used in the future.
			</div>
		</div>
		<div className="UsedVaccines row">
			<div className="UsedVaccines__Info col text-lg-right order-mobile-second">
			<span className="text-highlight">{nonbinary}</span> of the vaccinatees were nonbinary, whereas <span className="text-highlight">{female}</span> of them described themselves as female. Rest <span className="text-highlight">{male}</span> of them were male.
			</div>
			<div className="UsedVaccines__Bar col">
				{nonbinaryP > 0 ? <div className="UsedVaccines__Bar__Nonbinary" style={{height: `${nonbinaryP}%`}}>{nonbinaryP}% Nonbinary</div>: null}
				{femaleP > 0 ? <div className="UsedVaccines__Bar__Female" style={{height: `${femaleP}%`}}>{femaleP}% Female</div>: null}
				{maleP > 0 ? <div className="UsedVaccines__Bar__Male" style={{height: `${maleP}%`}}>{maleP}% Male</div>: null}
			</div>
		</div>
	</div>
	);
}

export default UsedVaccines;