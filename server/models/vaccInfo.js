import mongoose from 'mongoose';

const vaccSchema = mongoose.Schema({});

const VaccInfo = mongoose.model('VaccInfo', vaccSchema, 'vaccInfo');

export default VaccInfo;