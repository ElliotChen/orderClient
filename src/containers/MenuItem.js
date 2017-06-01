/**
 * Created by elliot on 5/26/17.
 */
import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';


class MenuItem extends React.Component {
	constructor(props) {
		super(props);

		this.charges = 0;
	}

	handleOptionChange = (event, target) => {
		console.log(target);

		this.charges = target.checked? this.charges+target.value:this.charges-target.value;

		console.log(this.charges);
	}

	listOption = (option) => {

		return (
			<Form.Field key={option.id}>
				<Checkbox value={option.charge} label={option.name + ' - ' +option.charge + '元'} onChange={this.handleOptionChange}/>
			</Form.Field>
		);
	}

	render() {
		return(
			<Form>
				<div>
					{this.props.name}

					{this.props.options.map(this.listOption)}

					<Form.Field key={`o_$id`}>
						<input type='number' value={1} name='unit'/>
					</Form.Field>
				</div>
			</Form>
		);
	}
}

export default MenuItem;