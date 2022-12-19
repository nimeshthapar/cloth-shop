import React, { createContext, useEffect, useState } from 'react';
import {
	onAuthListenerChange,
	createUserDocHandler,
} from '../util/firebase.util';

export const UserContext = createContext({
	user: null,
	setUser: () => null,
});

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

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
