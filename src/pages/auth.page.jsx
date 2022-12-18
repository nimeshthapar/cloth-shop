import React from 'react';
import {
	createUserDocHandler,
	signInWithGooglePopup,
} from '../util/firebase.util';

const Auth = () => {
	const signInGoogleHandler = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocHandler(user);
	};
	return (
		<div>
			Auth
			<button type="btn" onClick={signInGoogleHandler}>
				Sign In With Google
			</button>
		</div>
	);
};

export default Auth;
