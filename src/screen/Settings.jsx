import React, {useContext} from 'react';
import {TextField} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import {PreferenceContext} from '../Store';

export default withStyles({

})(function Settings({ classes }) {
	const settings = useContext(PreferenceContext);

	return <div>
		{Object.keys(settings).filter(s => !s.startsWith('set')).map((setting, i) => <TextField
			key={i}
			id="outlined-name"
			label="Name"
			className={classes.textField}
			value={settings[setting]}
			onChange={settings['set' + setting.charAt(0).toUpperCase() + setting.substr(1)]}
			margin="normal"
			variant="outlined"
		/>)}
	</div>;
});