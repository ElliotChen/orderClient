/**
 * Created by elliot on 5/29/17.
 */
function orderItemReducer(orderItems = [], action) {
	switch (action.type) {
		case 'ADD_ORDER_ITEM':
			return [ ...orderItems, action.orderItem];
		default:
			return orderItems;
	}

}

export default orderItemReducer;