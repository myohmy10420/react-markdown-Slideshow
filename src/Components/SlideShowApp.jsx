import React, { Component } from 'react';
import { LivePreview } from './LivePreview';
import { SlideShowButton } from './SlideShowButton';

export class SlideShowApp extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			text: '',
			canPlay: false
		};

		this._handleChange = this._handleChange.bind(this);
	}
	componentWillUnmount() {
	}
	componentDidMount() {
	}

	_handleChange(e) {
		this.setState({
			text: e.target.value,
			canPlay: e.target.value != ''
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-6">
					<SlideShowButton
					
					canPlay={this.state.canPlay}
					className="btn btn-primary" />
					<textarea
					className="form-control"
					rows="25"
					onChange={this._handleChange}
					/>
				</div>
				<div className="col-md-6">
					<LivePreview text={this.state.text} />
				</div>
			</div>
		);
	}
}

SlideShowApp.defaultprops = {
}