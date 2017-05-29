/**
 * Created by elliot on 5/25/17.
 */
import React from 'react';
import MenuItem from './MenuItem';

var fakeItems = [
	{id:1},
	{id:2},
	{id:3}
	];

class Menu extends React.Component {

	listMenuItem(menuItem) {
		return (<MenuItem item={menuItem} />);
	}

	render() {
		return (
			<div>
				{fakeItems.map((menuItem) => {return (<MenuItem key={menuItem.id} item={menuItem} />)})}
				<div>Counter</div>
			</div>
		);
	}
}

export default Menu;