import { combineReducers } from "redux";

import vaccinations from './vaccinations';
import antiquaOrders from './antiquaOrders';
import solarBuddhicaOrders from './solarBuddhicaOrders';
import zerpfyOrders from './zerpfyOrders';

export default combineReducers({ vaccinations, antiquaOrders, solarBuddhicaOrders, zerpfyOrders });
