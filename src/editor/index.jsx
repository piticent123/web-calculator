import * as React from 'react';
import {withStyles} from '@material-ui/styles';
import {Grid, Paper, Typography} from '@material-ui/core';

const styles = {
	equation: {
		margin: '2rem',
		padding: '1rem 2rem'
	}
};

export default withStyles(styles)(class Editor extends React.Component {
	render() {
		const {classes} = this.props;

		return (<Grid container>
			<Grid item xs={12}>
				<Paper className={classes.equation}>
					<Typography variant="h4">
						x + 2
					</Typography>
				</Paper>
			</Grid>
			<h1>This is a editor!</h1>
		</Grid>);
	}
});