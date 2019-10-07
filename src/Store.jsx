import React, {useState, createContext} from 'react';

export const PreferenceContext = createContext();
export const DataContext = createContext();

export default function Store({children}) {
	const [preferences, setPreferences] = useState({
		set: name => e => setPreferences(Object.assign({}, preferences, {[name]: e.target.value})),
		screenHeight: 33,
		editor: 'arithmetic',
	});

	// TODO: These really should be broken out, especially because this doesn't work
	const [data, setData] = useState({
		variables: {},
		setVariable: (k, v) => setData(Object.assign(data, {[k]: v})),
		lists: {},
		setList: (k, v) => setData(Object.assign(data, {[k]: v})),
		functions: {},
		setFunction: (k, v) => setData(Object.assign(data, {[k]: v})),
	});

	return <PreferenceContext.Provider value={preferences}>
		<DataContext.Provider value={data}>
			{children}
		</DataContext.Provider>
	</PreferenceContext.Provider>;
}