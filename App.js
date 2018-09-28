/**
 * 
 * Chu Tự Hoàng
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import {
	Container, Content, Header, Text, Col, Row, Left, Right, Body, Button, Icon, Title,
	Card, CardItem
} from 'native-base';
import PropTypes from 'prop-types';

export default class App extends Component {
	static propType = {
		maxStars: PropTypes.number,
		color: PropTypes.string,
		activeColor: PropTypes.string,
		name: PropTypes.string,
		type: PropTypes.string,
		fontSize: PropTypes.number,
		activeName: PropTypes.string,
		activeType: PropTypes.string
	}

	static defaultProps = {
		maxStars: 5,

		fontSize: 27,

		color: 'red',
		name: 'star-border',
		type: 'MaterialIcons',

		activeColor: 'red',
		activeName: 'star',
		activeType: 'MaterialIcons'
	}

	constructor(props) {
		super(props);
		this.renderStar = this.renderStar.bind(this);
	}

	componentDidMount() {

	}

	renderStar(count) {
		for (let i = 0; i < count; i++) {
			return (
				<Body>
					<Icon
						active name={this.props.name}
						type={this.props.type}
						style={{ color: this.props.color, fontSize: this.props.fontSize, marginLeft: 10 * i }}
					/>
				</Body>
			)
		}
		// return null;
	}
	render() {
		return (
			<Container>
				<Header>
					<Left />
					<Body>
						<Title>Star Rating</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<Card>
						<CardItem>
							<Body>
								<Text>Star Rating Example</Text>
								{this.renderStar(this.props.maxStars)}
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({

});
