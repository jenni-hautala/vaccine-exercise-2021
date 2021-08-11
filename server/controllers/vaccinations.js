import VaccInfo from '../models/vaccInfo.js';

export const getVaccinations = async (req, res) => {
	try {
		const vaccInfos = await VaccInfo.find();

		console.log(vaccInfos)

		res.status(200).json(vaccInfos);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}
