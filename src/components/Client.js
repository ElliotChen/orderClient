/**
 * Created by elliot on 6/12/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';


import {Container, Header, Button} from 'semantic-ui-react';

import Menu from './Menu';
import ClientBoard from '../containers/ClientBoard';
import ConfirmOrderModal from '../containers/ConfirmOrderModal';


class Client extends React.Component {
	render() {
		return (
				<Container>
					<Header as='h1'>Header</Header>
					<Menu />
					<ClientBoard type='TakeOut'/>
					<ConfirmOrderModal />
				</Container>
		);
	}
}

export default Client;