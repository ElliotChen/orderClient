/**
 * Created by elliot on 5/29/17.
 */
import {combineReducers} from 'redux';
import orderItemReducer from './order';

const orderApp = combineReducers({
	orderItemReducer
});

export default orderApp;