/**
 * Created by elliot on 5/29/17.
 */

//import {ADD_FAKE_ORDER} from './actions'

import {OrderState} from '../commons/Enum';
import {fakeOrders} from '../commons/DataUtil';

function orders(orders = fakeOrders, action) {
	console.log(`trigger ${action.type}`);
	let order = action.order;
	console.log(`orders - ${orders}`);
	console.log(`accept order - ${order}`);
	console.log(order);
	switch (action.type) {
		case 'ADD_FAKE_ORDER':
			return [ ...orders, order];
		case 'CREATE_ORDER':
			order.id = Date.now();
			order.state = OrderState.PREPARE;
			return [ ...orders, order];
		case 'COOKING_ORDER':
			order.state = OrderState.COOKING;
			//orders.forEach((ord) => { if(ord.id == order.id){ console.log(`find order and state - ${ord.state}`);ord.state = 'cooking';}});
			return [ order, ...orders.filter((ord) => {return (ord.id != order.id)})];
		case 'SERVED_ORDER':
			order.state = OrderState.SERVED;
			return [ order, ...orders.filter((ord) => {return (ord.id != order.id)})];
		case 'CHECKOUT_ORDER':
			order.state = OrderState.CHECKOUT;

			return [ ...orders.filter((ord) => {return (ord.id != order.id)})];;
		default:
			return orders;
	}

}

export default orders;