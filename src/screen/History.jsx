import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';

import ExpressionEditor from '../ExpressionEditor';

export default withStyles({

})(function History({ classes }) {
	return <div>
		<Grid item xs={12}>
			<Paper className={classes.equation}>
				<Typography variant="h4">
					x + 2
				</Typography>
				<ExpressionEditor />
			</Paper>
		</Grid>
	</div>
});