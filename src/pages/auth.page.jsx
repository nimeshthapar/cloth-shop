import React from 'react';
import { signInWithGooglePopup } from '../util/firebase.util';

const Auth = () => {
	const signInGoogleHandler = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
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
