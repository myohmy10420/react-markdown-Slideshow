import React, { Component } from 'react';

export class LivePreview extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
		};
	}
	componentWillUnmount() {
	}
	componentDodMount() {
	}

	_handleClick(e) {
		this.setState({
		})
	}

	render() {
		return (
			<div>
				{this.props.text}
			</div>
		);
	}
}

LivePreview.defaultprops = {
}