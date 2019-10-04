import React, {useState} from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';

import History from './History';
import Graph from './Graph';
import Editor from './Editor';
import Settings from './Settings';

export default withStyles({
	root: {
		flexBasis: '50%',
		display: 'flex',
		flexDirection: 'column',
		border: '10px solid black',
	},
	display: {
		flex: 1,
	}
})(function Screen({classes}) {
	const [activeTab, setActiveTab] = useState('history');

	function renderScreen() {
		switch(activeTab) {
			case 'history': return <History />;
			case 'editor': return <Editor />;
			case 'graph': return <Graph />;
			case 'settings': return <Settings />;
			default: return <div />;
		}
	}

	return (<div className={classes.root}>
		<div className={classes.display}>
			{renderScreen()}
		</div>
		<div>
			<BottomNavigation value={activeTab} onChange={(e, t) => setActiveTab(t)}>
				<BottomNavigationAction label="History" value="history" icon={<i className="fad fa-2x fa-history" />} />
				<BottomNavigationAction label="Editor" value="editor" icon={<i className="fad fa-2x fa-edit" />} />
				<BottomNavigationAction label="Graph" value="graph" icon={<i className="fad fa-2x fa-chart-line" />} />
				<BottomNavigationAction label="Settings" value="settings" icon={<i className="fad fa-2x fa-cog" />} />
			</BottomNavigation>
		</div>
	</div>);
});