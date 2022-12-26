import React, { createContext, useEffect, useReducer } from 'react';
import {
	onAuthListenerChange,
	createUserDocHandler,
} from '../util/firebase.util';

export const UserContext = createContext({
	user: null,
	setUser: () => null,
});

export const USER_ACTION_TYPES = {
	SET_USER: 'SET_USER',
};

const INITIAL_STATE = {
	user: null,
};

const userReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_USER:
			return { ...state, user: payload };
		default:
			throw new Error(`Unhandled type ${type} in userReducer`);
	}
};

const UserProvider = ({ children }) => {
	const [{ user }, dispatch] = useReducer(userReducer, INITIAL_STATE);

	const setUser = (user) =>
		dispatch({ type: USER_ACTION_TYPES.SET_USER, payload: user });

	useEffect(() => {
		const unsuscribe = onAuthListenerChange((user) => {
			if (user) {
				createUserDocHandler(user);
			}
			setUser(user);
		});

		return unsuscribe;
	}, []);

	const value = { user, setUser };

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};

export default UserProvider;
