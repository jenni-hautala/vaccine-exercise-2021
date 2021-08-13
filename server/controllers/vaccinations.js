import {VaccInfo, Antiqua, SolarBuddhica, Zerpfy} from '../models/models.js';

export const getVaccinations = async (req, res) => {
	try {
		const vaccInfos = await VaccInfo.find();
		const antiquaOrders = await Antiqua.find();
		const solarBuddhicaOrders = await SolarBuddhica.find();
		const zerpfyOrders = await Zerpfy.find();

		console.log(vaccInfos)
		console.log(antiquaOrders)
		console.log(solarBuddhicaOrders)
		console.log(Zerpfy)

		res.status(200).json({vaccInfos, antiquaOrders, solarBuddhicaOrders, zerpfyOrders});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}
