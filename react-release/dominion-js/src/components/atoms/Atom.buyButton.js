import React, { Component } from 'react';
import imageMap from '../../imageMap';

import '../../scss/App.scss';

export default class buyButton extends Component {

	render() {
		return (
			<div className="buyButton">
				<img src={imageMap.other.buyBtn} role="presentation" />
			</div>
		);
	}
}