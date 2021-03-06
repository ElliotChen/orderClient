/**
 * Created by elliot on 6/13/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button, Modal, Icon} from 'semantic-ui-react';
import { checkOutOrder } from '../actions';
import {OrderType, OrderState} from '../commons/Enum';
import CashModal from './CashModal';
import AlipayModal from './AlipayModal';
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
	};

	render() {
		const {order} = this.props;

		let button = null;
		if (order.state == OrderState.CHECKOUT) {
			button = <Button>已結帳</Button>;
		} else {
			button = <Button onClick={this.open} color='green'>結帳</Button>;
		}
		return (
			<Modal
				trigger={button}
				open={this.state.checkOutOrderModalOpen}
				onClose={this.close}
				size='small'>
				<Modal.Header>Order Checkout</Modal.Header>
				<Modal.Content>
					${order.totalPrice}
				</Modal.Content>
				<Modal.Actions>
					<CashModal totalPrice={order.totalPrice}/>
					<AlipayModal totalPrice={order.totalPrice}/>
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