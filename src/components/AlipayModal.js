/**
 * Created by elliot on 7/7/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button, Modal, Icon} from 'semantic-ui-react';

class AlipayModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {alipayModalOpen:false}
	}

	handleClose = () => this.setState({ alipayModalOpen: false });
	handleOpen = () => this.setState({ alipayModalOpen: true });

	render() {
		const {totalPrice} = this.props;
		return (
			<Modal
				trigger={<Button primary icon onClick={this.handleOpen}>支付寶<Icon name='right chevron' /></Button>}
				open={this.state.alipayModalOpen}
				onClose={this.handleClose}
			>
				<Modal.Header>支付寶結帳</Modal.Header>
				<Modal.Content>
					<form>
						總金額 ${totalPrice}<p />
						<img src="2d.jpg" />
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


export default AlipayModal;