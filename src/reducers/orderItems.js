/**
 * Created by elliot on 5/29/17.
 */
function orderItems(orderItems = [], action) {
	console.log(`trigger ${action.type}`);
	switch (action.type) {
		case 'ADD_ORDER_ITEM':
			return [ ...orderItems, action.orderItem];
		case 'REMOVE_ORDER_ITEM':
			return orderItems.filter((orderItem) => {return (orderItem.listId != action.orderItem.listId)});
		default:
			return orderItems;
	}

}

export default orderItems;