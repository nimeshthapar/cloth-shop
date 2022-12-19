import React from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import SignUpForm from '../../components/sign-up-form/sign-up-form';

const Auth = () => {
	return (
		<div className="form-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Auth;
