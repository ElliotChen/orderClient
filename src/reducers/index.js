/**
 * Created by elliot on 5/29/17.
 */
import {combineReducers} from 'redux';
import orders from './orders';
import orderItems from './orderItems';
import clientOrder from './clientOrder';

const orderApp = combineReducers({
	orders,
	orderItems,
	clientOrder
});

export default orderApp;