import React, { Component } from 'react';
import { connect } from 'react-redux';

const About = (props) => {
	console.log(props.Eth);
	return (
		<div>
			Current provider: {props.Eth.currentProvider.host}
		</div>
	)
};

export default connect(({ Eth }) => ({ Eth }), null)(About);
