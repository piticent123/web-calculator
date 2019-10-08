import React, { useState, useReducer, createContext } from 'react';

export const PreferenceContext = createContext();
export const DataContext = createContext();

export const DataEvents = {
	SET_VARIABLE: 'set variable',
	CHANGE_VARIABLE_NAME: 'change variable name',
	REMOVE_VARIABLE: 'remove variable',
	SET_FUNCTION: 'set function',
	CHANGE_FUNCTION_NAME: 'change function name',
	REMOVE_FUNCTION: 'remove function',
	SET_LIST_ITEM: 'set list item',
	CHANGE_LIST_NAME: 'change list name',
	ADD_LIST: 'add list',
	REMOVE_LIST: 'remove list',
};

export default function Store({ children }) {
	const [preferences, setPreferences] = useState({
		set: name => e => setPreferences({ ...preferences, [name]: e.target.value }),
		screenHeight: 50,
		editor: 'arithmetic',
	});

	const [data, dispatch] = useReducer(function (state, action) {
		switch (action.type) {
			case DataEvents.SET_VARIABLE:
				return {
					...state, 
					variables: {
						...state.variables,
						[action.variable]: action.value,
					},
				};
			case DataEvents.CHANGE_VARIABLE_NAME: {
				const res = {
					...state,
					variables: {
						...state.variables,
						[action.newName]: state.variables[action.oldName],
					},
				};
				delete res.variables[action.oldName];
				return res;
			}
			case DataEvents.REMOVE_VARIABLE: {
				const res = {...state};
				delete res.variables[action.variable];
				return res;
			}
			case DataEvents.SET_FUNCTION:
				return {
					...state,
					functions: {
						...state.functions,
						[action.fun]: action.value
					},
				};
			case DataEvents.CHANGE_FUNCTION_NAME: {
				const res = {
					...state,
					functions: {
						...state.functions,
						[action.newName]: state.functions[action.oldName],
					},
				};
				delete res.functions[action.oldName];
				return res;
			}
			case DataEvents.REMOVE_FUNCTION: {
				const res = {...state};
				delete res.functions[action.fun];
				return res;
			}
			case DataEvents.SET_LIST_ITEM:
				return {
					...state,
					lists: {
						...state.lists,
						[action.list]: state.lists[action.list].fill(action.value, action.i, action.i + 1),
					},
				};
			case DataEvents.CHANGE_LIST_NAME: {
				const res = {
					...state,
					lists: {
						...state.lists,
						[action.newName]: state.lists[action.oldName],
					},
				};
				delete res.lists[action.oldName];
				return res;
			}
			case DataEvents.ADD_LIST:
				return {
					...state,
					lists: {
						...state.lists,
						[action.list]: [],
					},
				};
			case DataEvents.REMOVE_LIST: {
				const res = {...state};
				delete res.lists[action.list];
				return res;
			}
			default:
				return state;
		}
	}, {
		variables: {hello: 'world'},
		lists: {},
		functions: {},
	});

	return <PreferenceContext.Provider value={preferences}>
		<DataContext.Provider value={[data, dispatch]}>
			{children}
		</DataContext.Provider>
	</PreferenceContext.Provider>;
}