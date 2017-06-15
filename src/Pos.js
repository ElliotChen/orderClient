import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducers';

import {Container, Header, Button} from 'semantic-ui-react';
import {addOrderItem} from './actions'

import Menu from './components/Menu';
import ClientBoard from './containers/ClientBoard';
import ConfirmOrderModal from './containers/ConfirmOrderModal';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PosIndex from './components/PosIndex';
import FrontDesk from './components/FrontDesk';
import Kitchen from './components/Kitchen';
import PosBoard from './components/PosBoard';

const store = createStore(reducer);
//const history = syncHistoryWithStore(browserHistory, store);
class Pos extends React.Component {
	render() {
		return (
			<Provider store={store} key={Math.random()}>
				<BrowserRouter>
					<Container>
						<Link to="/frontDesk">FrontDesk</Link>
						<Link to="/kitchen">Kitchen</Link>
						<Link to="/posBoard">PosBoard</Link>
						<Route path="/" component={PosIndex} />
						<Route path="/frontDesk" component={FrontDesk} />
						<Route path="/kitchen" component={Kitchen} />
						<Route path="/posBoard" component={PosBoard} />
					</Container>
				</BrowserRouter>
			</Provider>
		);
	}
}
ReactDOM.render(<Pos />, document.getElementById('main'));