/**
 * Created by elliot on 5/29/17.
 */
import {combineReducers} from 'redux';
import doAddOrderItem from './order';

const orderApp = combineReducers({
	doAddOrderItem
});

export default orderApp;