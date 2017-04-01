import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
	TouchableOpacity,
} from 'react-native';
import commonStyles from '../../../styles/common';
import * as font from '../../../styles/font';
import {SCENES} from '../../../routes';

export default SideMenu = ({changeScene, logout}) => (
	<View style={styles.container}>
		<View style={styles.menuHeader}>
			<Text style={styles.menuHeaderText}>Awesome App!</Text>
		</View>
		<View style={styles.menuItem}>
			<TouchableOpacity onPress={() => changeScene(SCENES.home.key)}>
				<Text>Home</Text>
			</TouchableOpacity>
		</View>
		<View style={styles.menuItem}>
			<TouchableOpacity onPress={logout}>
				<Text>Logout</Text>
			</TouchableOpacity>
		</View>
	</View>
);

SideMenu.propTypes = {
	changeScene: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
	},
	menuHeader: {
		padding: 20,
	},
  menuHeaderText: {
    textAlign: 'center',
    fontSize: font.SIZE_H1,
  },
	menuItem: {
		padding: 20,
	},
});