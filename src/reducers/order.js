/**
 * Created by elliot on 5/29/17.
 */
function doAddOrderItem(orderItem = [], action) {
	switch (action.type) {
		case 'ADD_ORDER_ITEM':
			return [];
		default:
			return orderItem;
	}

}

export default doAddOrderItem;