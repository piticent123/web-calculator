import React, { createContext, useState } from 'react';

export const PreferenceContext = createContext();
export const DataContext = createContext();

export default function Store({children}) {
	const [preferences, setPreferences] = useState({
		screenHeight: 33,
		setHeight: screenHeight => setPreferences(Object.assign(preferences, {screenHeight})),
		editor: 'arithmetic',
		setEditor: editor => setPreferences(Object.assign(preferences, {editor})),
	});

	const [data, setData] = useState({
		variables: {},
		setVariable: (k, v) => setData(Object.assign(data, {[k]: v})),
		lists: {},
		setList: (k, v) => setData(Object.assign(data, {[k]: v})),
	});

	return <PreferenceContext.Provider data={preferences}>
		<DataContext.Provider data={data}>
			{children}
		</DataContext.Provider>
	</PreferenceContext.Provider>;
}