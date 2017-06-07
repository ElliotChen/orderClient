/**
 * Created by elliot on 5/29/17.
 */

const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM';
const REMOVE_ORDER_ITEM = 'REMOVE_ORDER_ITEM';

export const addOrderItem = (orderItem) => ({
	type: ADD_ORDER_ITEM,
	orderItem
});

export const removeOrderItem = (orderItem) => ({
	type: REMOVE_ORDER_ITEM,
	orderItem
});