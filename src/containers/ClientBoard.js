/**
 * Created by elliot on 06/06/2017.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button, Grid} from 'semantic-ui-react';
import { removeOrderItem } from '../actions';

class ClientBoard extends React.Component {
	onLogButton = (event) => {
		console.log(this.props.orderItems);
	}

	onRemoveButton = (event, target, orderItem) => {
		this.props.dispatchRemoveOrderItem(orderItem);
	}

	listOrderItems = (orderItem) => {
		console.log(orderItem);
		return (
			<Grid.Row key={orderItem.listId}>
				<Grid.Column>
					{orderItem.name} - {orderItem.quantity} - {orderItem.unit}
				</Grid.Column>
				<Grid.Column>
					{orderItem.selectedOptions.map(this.listSelectedOptions)}
				</Grid.Column>
				<Grid.Column>
					subtotal: {orderItem.subTotalPrice}
				</Grid.Column>
				<Grid.Column>
					<Button color="red" onClick={(e, target) => this.onRemoveButton(e, target, orderItem)}>取消</Button>
				</Grid.Column>
			</Grid.Row>
		);
	}

	listSelectedOptions = (option) => {
		return(
			<div>{option.name} - {option.charge}</div>
		);
	}

	showTotalPrice(orderItems) {
		var totalPrice = 0;

		orderItems.forEach((oi) => {totalPrice+=oi.subTotalPrice});
		console.log(totalPrice);
		return totalPrice;
	}

	render() {
		return (
				<Grid columns='equal'>
					<Grid.Row>
						<h2>Board - {this.props.type} - Table:{this.props.desk}</h2>
					</Grid.Row>
						{this.props.orderItems.map(this.listOrderItems)}
					<Grid.Row>
						<Grid.Column>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
						<Grid.Column>
							<h2> Total {this.showTotalPrice(this.props.orderItems)} </h2>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
					</Grid.Row>
				</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	orderItems:state.orderItems
})

const mapDispatchToProps = {dispatchRemoveOrderItem:(orderItem) => removeOrderItem(orderItem)}

ClientBoard = connect(mapStateToProps, mapDispatchToProps)(ClientBoard);

export default ClientBoard;