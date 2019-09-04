import React from 'react';
import {Provider} from 'react-redux';
import {withStyles} from '@material-ui/styles';

import store from './store';
import Editor from './editor';
import Screen from './screen';

const styles = {
	root: {
		backgroundColor: '#F5F5F5',
		height: '100vh',
		width: '100vw',
		position: 'absolute',
		left: 0,
		top: 0,
		overflow: 'auto'
	}
};

export default withStyles(styles)(function App(props) {
	const {classes} = props;

	return (<Provider store={store}>
		<div className={classes.root}>
			<Screen />
			<Editor />
		</div>
	</Provider>);
});
