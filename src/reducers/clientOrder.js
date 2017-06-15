/**
 * Created by elliot on 6/16/17.
 */

import {OrderState} from '../commons/Enum';
import * as Action from '../actions';

function clientOrder(clientOrder = {}, action) {
	console.log(`trigger ${action.type}`);
	switch (action.type) {
		case Action.CREATE_CLIENT_ORDER:
			return action.clientOrder;
		default:
			return clientOrder;
	}
}

export default clientOrder;