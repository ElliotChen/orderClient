/**
 * Created by elliot on 06/06/2017.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button} from 'semantic-ui-react';
import { removeOrderItem } from '../actions';

class ClientBoard extends React.Component {
	onLogButton = (event) => {
		console.log(this.props.orderItems);
	}

	onRemoveButton = (event, target, orderItem) => {
		this.props.dispatchRemoveOrderItem(orderItem);
	}

	listOrderItems = (orderItem) => {
		return (
			<div key={orderItem.listId}>
				{orderItem.listId} - {orderItem.name} - {orderItem.quantity} - with extraOption {orderItem.selectedOptions.length} - subtotal: {orderItem.subTotalPrice}<Button onClick={(e, target) => this.onRemoveButton(e, target, orderItem)}>Remove</Button>
			</div>
		);
	}

	render() {
		return (
			<div>
				<h2>Board</h2>
				{this.props.orderItems.map(this.listOrderItems)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	orderItems:state.orderItems
})

const mapDispatchToProps = {dispatchRemoveOrderItem:(orderItem) => removeOrderItem(orderItem)}

ClientBoard = connect(mapStateToProps, mapDispatchToProps)(ClientBoard);

export default ClientBoard;