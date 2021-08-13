import mongoose from 'mongoose';

const vaccSchema = mongoose.Schema({});

const VaccInfo = mongoose.model('VaccInfo', vaccSchema, 'vaccInfo');
const Antiqua = mongoose.model('Antiqua', vaccSchema, 'antiqua');
const SolarBuddhica = mongoose.model('SolarBuddhica', vaccSchema, 'solarBuddhica');
const Zerpfy = mongoose.model('Zerpfy', vaccSchema, 'zerpfy');

export {VaccInfo, Antiqua, SolarBuddhica, Zerpfy};