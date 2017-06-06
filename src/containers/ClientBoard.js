/**
 * Created by elliot on 06/06/2017.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button} from 'semantic-ui-react';

class ClientBoard extends React.Component {
	onLogButton = (event) => {
		console.log(this.props.orderItems);
	}

	listOrderItems = (orderItem) => {
		return (
			<div key={orderItem.listId}>
				{orderItem.listId} - {orderItem.name} - {orderItem.quantity} - with extraOption {orderItem.selectedOptions.length}
			</div>
		);
	}

	render() {
		return (
			<div>
				<h2>Board</h2>
				{this.props.orderItems.map(this.listOrderItems)}
				<Button onClick={this.onLogButton}>log props</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	orderItems:state.orderItems
})

const mapDispatchToProps = {};

ClientBoard = connect(mapStateToProps, {})(ClientBoard);

export default ClientBoard;