/**
 * Created by elliot on 5/26/17.
 */
import React from 'react';
import { Button, Input, Checkbox, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addOrderItem } from '../actions';

class MenuItem extends React.Component {
	constructor(props) {
		super(props);

		this.extraCharge = 0;
		this.quantity = 1;
		this.selectedOptions = [];

		console.log(addOrderItem);
	}

	listOption = (option) => {
		return (
			<Form.Checkbox key={option.id} value={option.id} label={option.name + ' - ' +option.charge + '元'} onChange={(e, target) => this.onOptionChange(e, target, option)}/>
		);
	}

	onOptionChange = (event, target, option) => {
		console.log(event);

		console.log(target);

		if (target.checked) {
			this.extraCharge += option.charge;
			this.selectedOptions.push(option)
		} else {
			this.extraCharge -= option.charge;
			this.selectedOptions = this.selectedOptions.filter((selectedOption) => {return option.id != selectedOption.id});
		}

		//this.extraCharge = target.checked? this.extraCharge+target.value:this.extraCharge-target.value;

		console.log(this.extraCharge);
		console.log(this.selectedOptions);
	}

	createExtra() {
		return {listId:new Date().getTime(), extraCharge:this.extraCharge, quantity:this.quantity, selectedOptions:this.selectedOptions};
	}
	onAddOrderItem = (event) => {
		event.preventDefault();
		let orderItem = { ...this.props.menuItem, ...this.createExtra()};
		console.log(orderItem);
		//dispatch(addOrderItem(orderItem));
		console.log(this.props.orderItems);
		console.log(this.props.dispatchAddOrderItem);
		this.props.dispatchAddOrderItem(orderItem);
	}

	onChangeUnit = (event) => {
		console.log('trigger change quantity');
		this.quantity = event.target.value;
	}
	render() {
		return(
			<Form>
				<div>
					{this.props.menuItem.name}

					{this.props.menuItem.options.map(this.listOption)}
					<Form.Input type='number' onChange={this.onChangeUnit} min={1} defaultValue={1}/>
					<Form.Button color='blue' onClick={this.onAddOrderItem} content="加入"/>
				</div>
			</Form>
		);
	}
}

const mapStateToProps = (state) => ({
	orderItems:state.orderItems
})

const mapDispatchToProps = {dispatchAddOrderItem:(orderItem) => addOrderItem(orderItem)}


MenuItem = connect(mapStateToProps, mapDispatchToProps)(MenuItem);

export default MenuItem;