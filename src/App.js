/**
 * Created by elliot on 5/25/17.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducers';

import {Container, Header, Button} from 'semantic-ui-react';
import {addOrderItem} from './actions'

import Menu from './components/Menu';
import ClientBoard from './containers/ClientBoard';
import ConfirmOrderModal from './containers/ConfirmOrderModal';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Blank from './components/Blank';
import Client from './components/Client';
import PosBoard from './components/PosBoard'
import {OrderState, OrderType} from './commons/Enum';

const store = createStore(reducer);

class App extends React.Component {
	render() {
		console.log(`params -> {}`,this.props.param);
		return (
			<Provider store={store}>
				<Container fluid="true">
					<Header as='h1'>Menu</Header>
					<Menu />
					<ClientBoard type={OrderType.FOR_HERR} desk="12"/>
					<ConfirmOrderModal type={OrderType.FOR_HERR} desk="12"/>
				</Container>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('main'));