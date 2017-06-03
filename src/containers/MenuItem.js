/**
 * Created by elliot on 5/26/17.
 */
import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addOrderItem } from '../actions';

class MenuItem extends React.Component {
	constructor(props) {
		super(props);

		this.extraCharge = 0;
		this.unit = 1;
		this.selectedOptions = {};
	}

	handleOptionChange = (option, event, target) => {
		console.log(event);

		console.log(target);
		/*
		if (target.checked) {
			this.extraCharge += target.value;
			//this.selectedOptions.push()
		} else {
			this.extraCharge -= target.value;
		}

		//this.extraCharge = target.checked? this.extraCharge+target.value:this.extraCharge-target.value;

		console.log(this.extraCharge);
		*/
	}

	listOption = (option) => {
		return (
			<Form.Field key={option.id}>
				<Checkbox value={option.charge} label={option.name + ' - ' +option.charge + '元'} onChange={(e) => this.handleOptionChange(option, e, this)}/>
			</Form.Field>
		);
	}

	onAddOrderItem = (event) => {

		let orderItem = { ...this.props.menuItem, extraCharge:this.extraCharge, unit:this.unit};
		console.log(orderItem);
		dispatch(addOrderItem(orderItem));

	}

	onChangeUnit = (event) => {
		this.unit = event.target.value;
	}
	render() {
		return(
			<Form>
				<div>
					{this.props.menuItem.name}

					{this.props.menuItem.options.map(this.listOption)}

					<Form.Field key={`o_$id`}>
						<input type='number' value={1} name='unit' onChange={this.onChangeUnit}/>
					</Form.Field>

					<Button color='blue' onClick={this.onAddOrderItem}>
						加入
					</Button>
				</div>
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {orderItems:state.orderItems};
}

function mapDispatchToProps() {
	return({
		addOrderItem:addOrderItem
	});
}

MenuItem = connect(mapStateToProps, mapDispatchToProps)(MenuItem);

export default MenuItem;