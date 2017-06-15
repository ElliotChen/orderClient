/**
 * Created by elliot on 5/29/17.
 */
export const ADD_FAKE_ORDER = 'ADD_FAKE_ORDER';
export const CREATE_ORDER = 'CREATE_ORDER'; //建立訂單
export const COOKING_ORDER = 'COOKING_ORDER'; //
export const SERVED_ORDER = 'SERVED_ORDER'; //出菜
export const CHECKOUT_ORDER = 'CHECKOUT_ORDER'; //結帳

export const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM';
export const REMOVE_ORDER_ITEM = 'REMOVE_ORDER_ITEM';

export const CREATE_CLIENT_ORDER = 'CREATE_CLIENT_ORDER';

export const addFakeOrder = (order) => ({
	type: ADD_FAKE_ORDER,
	order
});

export const createOrder = (order) => ({
	type: CREATE_ORDER,
	order
});

export const cookingOrder = (order) => ({
	type: COOKING_ORDER,
	order
});


export const servedOrder = (order) => ({
	type: SERVED_ORDER,
	order
});

export const checkOutOrder = (order) => ({
	type: CHECKOUT_ORDER,
	order
});

export const addOrderItem = (orderItem) => ({
	type: ADD_ORDER_ITEM,
	orderItem
});

export const removeOrderItem = (orderItem) => ({
	type: REMOVE_ORDER_ITEM,
	orderItem
});

export const createClientOrder = (clientOrder) => ({
	type: CREATE_CLIENT_ORDER,
	clientOrder
});