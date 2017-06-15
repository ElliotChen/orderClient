/**
 * Created by elliot on 5/25/17.
 */
'use strict';
import React from 'react';
import MenuItem from '../containers/MenuItem';
import {fakeMenuItems} from '../commons/DataUtil';

var fakeItems = fakeMenuItems;

class Menu extends React.Component {
	listMenuItem = (menuItem) => {
		return (<MenuItem item={menuItem} />);
	}
	/*
	listMenuItem(menuItem) {
		return (<MenuItem item={menuItem} />);
	}
	*/

	render() {
		return (
			<div>
				{fakeItems.map((menuItem) => {return (<MenuItem key={menuItem.id} menuItem={menuItem}/>)})}
				<div>Counter</div>
			</div>
		);
	}
}

export default Menu;