/**
 * Created by elliot on 5/25/17.
 */
'use strict';
import React from 'react';
import MenuItem from '../containers/MenuItem';

var fakeItems = [
	{id:'1', name:'滷肉飯', price:30, image:'', options:[{id:'1_01', name:'加大', charge:10}, {id:'1_02', name:'加香菜', charge:0}]},
	{id:'2', name:'香腸', price:15, image:'', options:[{id:'2_01', name:'加蒜', charge:15}]},
	{id:'3', name:'陽春麵', price:35, image:'', options:[{id:'3_01', name:'加大', charge:10}, {id:'3_02', name:'小辣', charge:0}, {id:'3_03', name:'超辣', charge:0}]}
	];

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
				{fakeItems.map((menuItem) => {return (<MenuItem key={menuItem.id} {...menuItem} />)})}
				<div>Counter</div>
			</div>
		);
	}
}

export default Menu;