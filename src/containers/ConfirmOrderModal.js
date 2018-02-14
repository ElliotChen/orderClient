/**
 * Created by elliot on 6/8/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button, Modal, Icon} from 'semantic-ui-react';
import { createOrder } from '../actions';
import {OrderType, OrderState} from '../commons/Enum';

class ConfirmOrderModal extends React.Component {
	constructor(props) {
		super(props);

	}
	state = {confirmOrderModalOpen : false};
	close = () => this.setState({ confirmOrderModalOpen: false });
	open = () => this.setState({ confirmOrderModalOpen: true });

	doCreateOrder = (event) => {
		const {orderItems} = this.props;

		var totalPrice = 0;

		orderItems.forEach((oi) => {totalPrice+=oi.subTotalPrice});

		let clientOrder = {
			id:'ClientOrder' +  new Date(),
			totalPrice:totalPrice,
			number:1,
			desk: this.props.desk,
			type: this.props.type,
			state: OrderState.PREPARE,
			orderItems:orderItems
		}

		console.log(clientOrder);
		this.props.dispatchCreateClientOrder(clientOrder);
		this.close();
	}
	render() {
		const {orderItems, clientOrder} = this.props;

		console.log(orderItems.length);
		return (
			<Modal
				trigger={<Button color="green" onClick={orderItems.length > 0? this.open:this.close}>送出點菜單</Button>}
				open={this.state.confirmOrderModalOpen}
				onClose={this.close}
				size='small'>
				<Modal.Header>Order Submit</Modal.Header>
				<Modal.Content>
					送出點菜單?
				</Modal.Content>
				<Modal.Actions>
					<Button color='red' onClick={this.close}>
						<Icon name='cancel' /> No
					</Button>
					<Button color='green' onClick={this.doCreateOrder}>
						<Icon name='check' /> Yes
					</Button>
				</Modal.Actions>
			</Modal>
		);
	}
}

const mapStateToProps = (state) => ({
	orderItems:state.orderItems,
	clientOrder:state.clientOrder
})

const mapDispatchToProps = {dispatchCreateClientOrder:(clientOrder) => createOrder(clientOrder)}

ConfirmOrderModal = connect(mapStateToProps, mapDispatchToProps)(ConfirmOrderModal);

export default ConfirmOrderModal;