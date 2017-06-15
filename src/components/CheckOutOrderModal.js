/**
 * Created by elliot on 6/13/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button, Modal, Icon} from 'semantic-ui-react';
import { checkOutOrder } from '../actions';
import {OrderType, OrderState} from '../commons/Enum';

class CheckOutOrderModal extends React.Component {
	constructor(props) {
		super(props);

	}
	state = {checkOutOrderModalOpen : false};
	close = () => this.setState({ checkOutOrderModalOpen: false });
	open = () => this.setState({ checkOutOrderModalOpen: true });

	doCheckOutOrder = (event) => {
		this.props.dispatchCheckOutOrder(this.props.order);
		this.close();
	}
	render() {
		const {order} = this.props;
		return (
			<Modal
				trigger={<Button onClick={this.open}>CheckOut</Button>}
				open={this.state.checkOutOrderModalOpen}
				onClose={this.close}
				size='small'>
				<Modal.Header>Order Checkout</Modal.Header>
				<Modal.Content>
					${order.totalPrice}
				</Modal.Content>
				<Modal.Actions>
					<Button color='red' onClick={this.close}>
						<Icon name='cancel' /> No
					</Button>
					<Button color='green'>
						<Icon name='check' onClick={this.doCheckOutOrder}/> Yes
					</Button>
				</Modal.Actions>
			</Modal>
		);
	}
}

const mapStateToProps = (state) => ({
	orders:state.orders
})

const mapDispatchToProps = {dispatchCheckOutOrder:(order) => checkOutOrder(order)}

CheckOutOrderModal = connect(mapStateToProps, mapDispatchToProps)(CheckOutOrderModal);

export default CheckOutOrderModal;