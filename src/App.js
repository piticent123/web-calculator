import React from 'react';
import {Provider} from 'react-redux';

import store from './store';
import Editor from './editor';
import Screen from './screen';

export default function App() {
	return (<Provider store={store}>
		<div>
			<Screen />
			<Editor />
		</div>
	</Provider>);
};
