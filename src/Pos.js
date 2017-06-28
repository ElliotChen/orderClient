import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducers';

import {Container, Header, Button} from 'semantic-ui-react';
import {addOrderItem} from './actions'

//import Menu from './components/Menu';
import ClientBoard from './containers/ClientBoard';
import ConfirmOrderModal from './containers/ConfirmOrderModal';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import PosIndex from './components/PosIndex';
import FrontDesk from './components/FrontDesk';
import Kitchen from './components/Kitchen';
import PosBoard from './components/PosBoard';

import {Menu} from 'semantic-ui-react';

const store = createStore(reducer);
//const history = syncHistoryWithStore(browserHistory, store);
class Pos extends React.Component {
	render() {
		return (
			<Provider store={store} key={Math.random()}>
				<BrowserRouter>
					<Container>
						<Menu>
							<Menu.Item as={Link} to="/frontDesk"><strong>櫃台</strong></Menu.Item>
							<Menu.Item as={Link} to="/kitchen"><strong>廚房</strong></Menu.Item>
						</Menu>

						<Route path="/" component={PosIndex} />
						<Route path="/frontDesk" component={FrontDesk} />
						<Route path="/kitchen" component={Kitchen} />
					</Container>
				</BrowserRouter>
			</Provider>
		);
	}
}
ReactDOM.render(<Pos />, document.getElementById('main'));