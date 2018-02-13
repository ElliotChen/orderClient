/**
 * Created by elliot on 6/12/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';


import {Header} from 'semantic-ui-react';

import Menu from './Menu';
import ClientBoard from '../containers/ClientBoard';
import ConfirmOrderModal from '../containers/ConfirmOrderModal';
import {OrderType} from "../commons/Enum";


class Client extends React.Component {
	render() {
		return (
			<div>
				<Header as='h1'>Menu</Header>
				<Menu />
				<ClientBoard type={OrderType.FOR_HERR} desk="12"/>
				<ConfirmOrderModal type={OrderType.FOR_HERR} desk="12"/>
			</div>
		);
	}
}

export default Client;