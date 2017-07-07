/**
 * Created by elliot on 7/7/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button, Modal, Icon} from 'semantic-ui-react';

class AlipayModal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {totalPrice} = this.props;
		return (
			<Modal
				trigger={<Button primary icon>支付寶<Icon name='right chevron' /></Button>}
			>
				<Modal.Header>支付寶結帳</Modal.Header>
				<Modal.Content>
					<form>
						總金額 ${totalPrice}<p />
						<img src="2d.jpg" />
					</form>
				</Modal.Content>
				<Modal.Actions>
				</Modal.Actions>
			</Modal>
		);
	}
}


export default AlipayModal;