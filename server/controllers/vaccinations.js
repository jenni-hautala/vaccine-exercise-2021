import {VaccInfo, Zerpfy} from '../models/vaccInfo.js';

export const getVaccinations = async (req, res) => {
	try {
		const vaccInfos = await VaccInfo.find();
		// const zerpfyOrders = await Zerpfy.find();

		console.log(Zerpfy)

		// res.status(200).json({vaccInfos, zerpfyOrders});
		res.status(200).json(vaccInfos);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}

// export const getZerpfy = async (req, res) => {
// 	try {
// 		const zerpfyOrders = await Zerpfy.find();

// 		res.status(200).json(zerpfyOrders);
// 	} catch (error) {
// 		res.status(404).json({ message: error.message });
// 	}
// }
