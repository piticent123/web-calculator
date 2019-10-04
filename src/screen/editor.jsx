import React from 'react';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export default withStyles({

})(function Editor({classes}) {
	return <div>
		<ExpansionPanel>
			<ExpansionPanelSummary
				expandIcon={<i className="far fa-caret-down" />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography className={classes.heading}>Functions</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
					sit amet blandit leo lobortis eget.
          		</Typography>
			</ExpansionPanelDetails>
		</ExpansionPanel>
		<ExpansionPanel>
			<ExpansionPanelSummary
				expandIcon={<i className="far fa-caret-down" />}
				aria-controls="panel2a-content"
				id="panel2a-header"
			>
				<Typography className={classes.heading}>Lists</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
					sit amet blandit leo lobortis eget.
         		</Typography>
			</ExpansionPanelDetails>
		</ExpansionPanel>
		<ExpansionPanel>
			<ExpansionPanelSummary
				expandIcon={<i className="far fa-caret-down" />}
				aria-controls="panel3a-content"
				id="panel3a-header"
			>
				<Typography className={classes.heading}>Variables</Typography>
			</ExpansionPanelSummary>
		</ExpansionPanel>
	</div>;
});