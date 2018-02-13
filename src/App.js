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

import {Menu} from 'semantic-ui-react';
import ClientBoard from './containers/ClientBoard';
import ConfirmOrderModal from './containers/ConfirmOrderModal';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Blank from './components/Blank';
import Client from './components/Client';
import PosBoard from './components/PosBoard'
import {OrderState, OrderType} from './commons/Enum';
import FrontDesk from "./components/FrontDesk";
import PosIndex from "./components/PosIndex";
import Kitchen from "./components/Kitchen";

const store = createStore(reducer);

class App extends React.Component {
	render() {
		console.log(`params -> {}`,this.props.param);
		return (
			<Provider store={store} key={Math.random()}>
				<BrowserRouter>
					<Container>
						<Menu>
							<Menu.Item as={Link} to="/clientOrder"><strong>點餐</strong></Menu.Item>
							<Menu.Item as={Link} to="/frontDesk"><strong>櫃台</strong></Menu.Item>
							<Menu.Item as={Link} to="/kitchen"><strong>廚房</strong></Menu.Item>
						</Menu>
						<Switch>
						<Route exact path="/" component={Client} />
						<Route path="/clientOrder" component={Client} />
						<Route path="/frontDesk" component={FrontDesk} />
						<Route path="/kitchen" component={Kitchen} />
						</Switch>
					</Container>
				</BrowserRouter>

			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('main'));