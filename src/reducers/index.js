/**
 * Created by elliot on 5/29/17.
 */
import {combineReducers} from 'redux';
import orderItems from './order';

const orderApp = combineReducers({
	orderItems
});

export default orderApp;