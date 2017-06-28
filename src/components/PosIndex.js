/**
 * Created by elliot on 6/11/17.
 */
import React from 'react';
import {fakeOrders} from '../commons/DataUtil';

import { connect } from 'react-redux';

import {Header, Button, Grid, Segment} from 'semantic-ui-react';
import { addFakeOrder, cookingOrder, servedOrder } from '../actions';
import {OrderState} from '../commons/Enum';


class PosIndex extends React.Component {
	componentWillMount() {
		fakeOrders.map((order)=>{this.props.dispatchAddFakeOrder(order)});
	}
	render() {
		return (
			<Header as='h1'></Header>
		);
	}
}

const mapStateToProps = (state) => ({
	orders:state.orders
})

const mapDispatchToProps = {
	dispatchAddFakeOrder:(order) => addFakeOrder(order)
}

PosIndex = connect(mapStateToProps, mapDispatchToProps)(PosIndex);

export default PosIndex;