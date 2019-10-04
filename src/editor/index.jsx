import React, { useContext } from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { PreferenceContext } from '../Store';

export default withStyles({
	root: {
		flex: 1
	},
	equation: {
		margin: '2rem',
		padding: '1rem 2rem'
	}
})(function Editor({classes}) {
	const editor = useContext(PreferenceContext);

	function renderEditor() {
		switch (editor) {
			case 'arithmetic':
			case 'calculus':
			case 'statistics':
			case 'algebra':
			default: return <div />;
		}
	}

	return (<Grid container className={classes.root}>
		{renderEditor()}
	</Grid>);
});