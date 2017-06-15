## Object Structure

```json
MenuItem = {
	id:'1', 
	name:'滷肉飯', 
	price:30, 
	image:'', 
	unit:'碗',
	options:[{id:'1_01', name:'加大', charge:10}, {id:'1_02', name:'加香菜', charge:0}]
}

MenuItem.Option = {
	id:'1_01', 
	name:'加大', 
	charge:10
}

OrderItem = {
	...MenuItem,
	listId:new Date().getTime(), 
	extraCharge:this.extraCharge, 
	quantity:this.quantity, 
	selectedOptions:[MenuItem.Option], 
	subTotalPrice:(this.props.menuItem.price + this.extraCharge)*this.quantity
}

Order = {
	id:'',日
	totalPrice:250,
	number:
	type: //外帶
	state: //prepare準備中，cooking，table出菜完成，checkouted結帳完成
	orderItems:[orderItem]
}
```