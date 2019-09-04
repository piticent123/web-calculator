import * as React from 'react';
import {Grid, BottomNavigation, BottomNavigationAction} from '@material-ui/core';

export default class Screen extends React.Component {
	state = {
		activeTab: "history"
	};

	changeTab = (e, activeTab) => this.setState({activeTab});

	render() {
		const {activeTab} = this.state;

		return (<Grid container>
			<Grid item xs={12}>
				<h1>This is a screen!</h1>
			</Grid>
			<Grid item xs={12}>
				<BottomNavigation value={activeTab} onChange={this.changeTab}>
					<BottomNavigationAction label="History" value="history" icon={<i className="fad fa-2x fa-history" />} />
					<BottomNavigationAction label="Editor" value="editor" icon={<i className="fad fa-2x fa-edit" />} />
					<BottomNavigationAction label="Graph" value="graph" icon={<i className="fad fa-2x fa-chart-line" />} />
				</BottomNavigation>
			</Grid>
		</Grid>);
	}
}