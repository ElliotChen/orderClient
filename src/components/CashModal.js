/**
 * Created by elliot on 7/7/17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {Button, Modal, Icon} from 'semantic-ui-react';

class CashModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {change:0}
	}

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
				trigger={<Button primary icon>現金結帳<Icon name='right chevron' /></Button>}
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
				</Modal.Actions>
			</Modal>
		);
	}
}


export default CashModal;