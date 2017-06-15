/**
 * Created by elliot on 6/12/17.
 */
import {OrderState, OrderType} from '../commons/Enum';
export const fakeMenuItems = [
	{id:'1', name:'滷肉飯', price:30, image:'', unit:'碗', options:[{id:'1_01', name:'加大', charge:10}, {id:'1_02', name:'加香菜', charge:0}]},
	{id:'2', name:'香腸', price:15, image:'', unit:'盤', options:[{id:'2_01', name:'加蒜', charge:15}]},
	{id:'3', name:'陽春麵', price:35, image:'', unit:'碗', options:[{id:'3_01', name:'加大', charge:10}, {id:'3_02', name:'加辣', charge:0}]}
];

export const fakeOrders = [
	{
		id:'fakeOrder01',
		totalPrice:250,
		desk:12,
		number:1,
		type: OrderType.FOR_HERR,
		state: OrderState.PREPARE,//prepare準備中，table出菜完成，checkouted結帳完成
		orderItems:[
			{
				id:'1',
				name:'滷肉飯',
				price:30,
				image:'',
				unit:'碗',
				listId:'list_0001',
				extraCharge:10,
				quantity:2,
				selectedOptions:[{id:'1_01', name:'加大', charge:10},{id:'1_02', name:'加香菜', charge:0}],
				subTotalPrice:15
			},
			{
				id:'2',
				name:'香腸',
				price:15,
				image:'',
				unit:'盤',
				listId:'list_0002',
				extraCharge:15,
				quantity:3,
				selectedOptions:[{id:'2_01', name:'加蒜', charge:15}],
				subTotalPrice:25
			}
		]
	},
	{
		id:'fakeOrder02',
		totalPrice:120,
		desk:0,
		number:2,
		type: OrderType.TAKE_OUT,//外帶
		state: OrderState.PREPARE,//prepare準備中，table出菜完成，checkouted結帳完成
		orderItems:[
			{
				id:'1',
				name:'香腸',
				price:15,
				image:'',
				unit:'盤',
				listId:'list_0003',
				extraCharge:15,
				quantity:3,
				selectedOptions:[{id:'2_01', name:'加蒜', charge:15}],
				subTotalPrice:35
			},
			{
				id:'3',
				name:'陽春麵',
				price:35,
				image:'',
				unit:'碗',
				listId:'list_0004',
				extraCharge:10,
				quantity:1,
				selectedOptions:[{id:'3_01', name:'加大', charge:10}, {id:'3_02', name:'小辣', charge:0}],
				subTotalPrice:45
			}
		]
	},
	{
		id:'fakeOrder03',
		totalPrice:190,
		desk:0,
		number:3,
		type: OrderType.TAKE_OUT,//外帶
		state: OrderState.PREPARE,//prepare準備中，table出菜完成，checkouted結帳完成
		orderItems:[
			{
				id:'1',
				name:'香腸',
				price:15,
				image:'',
				unit:'盤',
				listId:'list_0003',
				extraCharge:15,
				quantity:3,
				selectedOptions:[{id:'2_01', name:'加蒜', charge:15}],
				subTotalPrice:35
			},
			{
				id:'3',
				name:'陽春麵',
				price:35,
				image:'',
				unit:'碗',
				listId:'list_0004',
				extraCharge:10,
				quantity:1,
				selectedOptions:[{id:'3_01', name:'加大', charge:10}, {id:'3_02', name:'小辣', charge:0}],
				subTotalPrice:45
			}
		]
	}
];