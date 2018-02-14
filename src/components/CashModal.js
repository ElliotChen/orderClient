/**
 * Created by elliot on 7/7/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button, Modal, Icon} from 'semantic-ui-react';

class CashModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {change:0, cashModalOpen:false}
	}

	handleClose = () => this.setState({ cashModalOpen: false });
	handleOpen = () => this.setState({ cashModalOpen: true });

	handleChange = (event) => {
		//event.preventDefault();
		//console.log(event.target.value);

		let moneyCollection = event.target.value ? event.target.value:0;
		this.setState({change:(moneyCollection-this.props.totalPrice)});
	}
	render() {
		const {totalPrice} = this.props;
		return (
			<Modal
				trigger={<Button primary icon onClick={this.handleOpen}>現金結帳<Icon name='right chevron' /></Button>}
				open={this.state.cashModalOpen}
				onClose={this.handleClose}
			>
				<Modal.Header>現金結帳</Modal.Header>
				<Modal.Content>
					<form>
						總金額 ${totalPrice}<p />
						收取金額 $<input type="number" name="moneyCollection" onChange={this.handleChange}/><p />
						找零 {this.state.change}
					</form>
				</Modal.Content>
				<Modal.Actions>
					<Button color='red'>
						<Icon name='cancel' onClick={this.handleClose}/> No
					</Button>
					<Button color='green'>
						<Icon name='check' onClick={this.handleClose}/> Yes
					</Button>
				</Modal.Actions>
			</Modal>
		);
	}
}


export default CashModal;