/**
 * Created by elliot on 6/11/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Header, Button, Grid, Segment, Table} from 'semantic-ui-react';
import { addFakeOrder, cookingOrder, servedOrder } from '../actions';
import {OrderState} from '../commons/Enum';
import CheckOutOrderModal from './CheckOutOrderModal';
import InvoiceModal from './InvoiceModal';

class FrontDesk extends React.Component {
	constructor(props) {
		super(props);

		this.orders = [];
	}
	componentWillMount() {
		this.orders = this.props.orders;
	}

	listOrderInfo = (order) => {
		return (
			<Table.Row key={order.id}>
				<Table.Cell>{order.number}</Table.Cell>
				<Table.Cell>{order.totalPrice}</Table.Cell>
				<Table.Cell>{order.state}</Table.Cell>
				<Table.Cell><CheckOutOrderModal order={order} /><InvoiceModal /></Table.Cell>
			</Table.Row>
		);
	}

	render() {
		return (
			<div>
				<Header as="h2">Front Desk</Header>
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>點餐序號</Table.HeaderCell>
							<Table.HeaderCell>Price</Table.HeaderCell>
							<Table.HeaderCell>State</Table.HeaderCell>
							<Table.HeaderCell>Function</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{this.orders.map(this.listOrderInfo)}
					</Table.Body>
				</Table>
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

FrontDesk = connect(mapStateToProps, mapDispatchToProps)(FrontDesk);

export default FrontDesk;