import React from 'react';
import {withStyles} from '@material-ui/styles';

import Editor from './editor';
import Screen from './screen';

export default withStyles({
	root: {
		backgroundColor: '#F5F5F5',
		height: '98vh',
		width: '98vw',
		position: 'absolute',
		left: '1vw',
		top: '1vh',
		overflow: 'auto',
		display: 'flex',
		flexDirection: 'column'
	},
})(function App({classes}) {
	return (<div className={classes.root}>
		<Screen />
		<Editor />
	</div>);
});
