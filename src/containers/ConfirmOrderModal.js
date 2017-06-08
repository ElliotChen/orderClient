/**
 * Created by elliot on 6/8/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button, Modal, Icon} from 'semantic-ui-react';

class ConfirmOrderModal extends React.Component {
	constructor(props) {
		super(props);

	}
	state = {confirmOrderModalOpen : false};
	close = () => this.setState({ confirmOrderModalOpen: false });
	open = () => this.setState({ confirmOrderModalOpen: true });
	render() {
		return (
			<Modal
				trigger={<Button onClick={this.open}>CheckOut</Button>}
				open={this.state.confirmOrderModalOpen}
				onClose={this.close}
				size='small'>
				<Modal.Header>Order Submit</Modal.Header>
				<Modal.Content>
				</Modal.Content>
				<Modal.Actions>
					<Button color='red' onClick={this.close}>
						<Icon name='cancel' /> No
					</Button>
					<Button color='green'>
						<Icon name='check' /> Yes
					</Button>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default ConfirmOrderModal;