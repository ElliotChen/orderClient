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

const store = createStore(reducer);

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Container>
					<Header as='h1'>Header</Header>
					<Menu />
					<ClientBoard />
					<Button primary>Finish</Button>
				</Container>
			</Provider>
		);
	}
}
console.log(addOrderItem);
ReactDOM.render(<App />, document.getElementById('main'));