import React, {useContext} from 'react';
import {TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
// import debounce from 'lodash.debounce';

import {PreferenceContext} from '../Store';

export default withStyles({
	root: {
		padding: '1rem',
		display: 'flex'
	},
	textField: {
		margin: '1rem',
	},
})(function Settings({ classes }) {
	const settings = useContext(PreferenceContext);

	return <div className={classes.root}>
		{Object.keys(settings).filter(s => s !== 'set').map((setting, i) => <TextField
			key={i}
			id={`setting-${setting}`}
			label={setting}
			className={classes.textField}
			value={settings[setting]}
			onChange={settings.set(setting)}
			margin="normal"
			variant="outlined"
			// type={typeof settings[setting] === 'number' ? 'number' : 'text'}
		/>)}
	</div>;
});