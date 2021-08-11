import mongoose from 'mongoose';

const vaccSchema = mongoose.Schema({});

const VaccInfo = mongoose.model('VaccInfo', vaccSchema, 'vaccInfo');
const Zerpfy = mongoose.model('Zerpfy', vaccSchema, 'zerpfy');

export {VaccInfo, Zerpfy};