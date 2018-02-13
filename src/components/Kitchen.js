/**
 * Created by elliot on 6/11/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Header, Button, Grid, Segment} from 'semantic-ui-react';
import { addFakeOrder, cookingOrder, servedOrder } from '../actions';
import {OrderState} from '../commons/Enum';

class Kitchen extends React.Component {

	constructor(props) {
		super(props);

		this.orders = [];
	}
	componentWillMount() {
		this.orders = this.props.orders.filter((order)=>{return (order.state == OrderState.PREPARE) || (order.state == OrderState.COOKING)});
	}

	onCookingClick = (event, target, order) => {
		this.props.dispatchCookingOrder(order);
	}

	onServedClick = (event, target, order) => {
		this.props.dispatchServedOrder(order);

		this.orders = this.orders.filter((order)=>{return (order.state == OrderState.PREPARE) || (order.state == OrderState.COOKING)});
	}

	listSelectedOptions = (option) => {
		return(
			<h5>-{option.name}</h5>
		);
	}

	listOrderItem = (orderItem) => {
		console.log("KT "+orderItem.name);
		console.log(orderItem);
		return (
			<div key={orderItem.listId}>
					{orderItem.name} - {orderItem.quantity}{orderItem.unit} {orderItem.selectedOptions.map(this.listSelectedOptions)}
			</div>
		);
	}

	listOrder = (order) => {
		let button = null;
		let color = 'green'
		if (order.state == OrderState.PREPARE) {
			color = 'blue';
			button = <Button onClick={(event, target) => {this.onCookingClick(event, target, order)}}>Cooking</Button>
		} else if (order.state == OrderState.COOKING) {
			color = 'green';
			button = <Button onClick={(event, target) => {this.onServedClick(event, target, order)}}>Served</Button>
		} else if (order.state == OrderState.SERVED) {
			color = 'green';
		}

		return (
			<Grid.Column color={color} key={order.id}>
				<Segment color={color} inverted>
					點餐序號:{order.number} - 桌號:{order.desk} - {order.type} - {order.state}
					{order.orderItems.map(this.listOrderItem)}
					{button}
				</Segment>
			</Grid.Column>
		);
	}
	render() {
		return (
			<div>
				<Header as='h2'>Kitchen</Header>
				<Grid columns={2} padded>
				{this.orders.map(this.listOrder)}
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	orders:state.orders
})

const mapDispatchToProps = {
	dispatchAddFakeOrder:(order) => addFakeOrder(order),
	dispatchCookingOrder:(order) => cookingOrder(order),
	dispatchServedOrder:(order) => servedOrder(order)
}

Kitchen = connect(mapStateToProps, mapDispatchToProps)(Kitchen);

export default Kitchen;