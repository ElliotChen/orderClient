/**
 * Created by elliot on 5/26/17.
 */
import React from 'react';
import Elements from 'semantic-ui-react';


class MenuItem extends React.Component {
	render() {
		return(
			<div>{this.props.item.id}</div>
		);
	}
}

export default MenuItem;