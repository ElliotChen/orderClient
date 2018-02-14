/**
 * Created by elliot on 6/28/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { PrintTemplate } from 'react-print';

import {Button, Modal, Icon} from 'semantic-ui-react';
import { checkOutOrder } from '../actions';
import {OrderType, OrderState} from '../commons/Enum';

class InvoiceModal extends  React.Component {
	constructor(props) {
		super(props);

	}
	state = {checkInvoiceModalOpen : false};

	close = () => this.setState({ checkInvoiceModalOpen: false });
	open = () => this.setState({ checkInvoiceModalOpen: true });

	doPrintInvoice = (event) => {
		console.log('1234');
		window.print();
		this.close();
	};

	render() {
		let button = <Button onClick={this.open} color='green'>Print</Button>;

		return (
				<Modal
					trigger={button}
					open={this.state.checkInvoiceModalOpen}
					onClose={this.close}
					size='fullscreen'>
					<Modal.Header>Invoice</Modal.Header>
					<Modal.Content>
						<div>
							<img src="invoice.jpg" className="section-to-print" classID="section-to-print"/>
						</div>
					</Modal.Content>
					<Modal.Actions>
						<Button color='red' onClick={this.close}>
							<Icon name='cancel' /> No
						</Button>
						<Button color='green'>
							<Icon name='check' onClick={this.doPrintInvoice}/> Print
						</Button>
					</Modal.Actions>
				</Modal>
		);
	}
}

export default InvoiceModal;