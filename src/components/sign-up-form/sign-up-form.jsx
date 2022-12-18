import React from 'react';
import { Form } from 'react-router-dom';
import Button from '../button/button';
import FormInput from '../form-input/form-input';

const SignUpForm = () => {
	return (
		<div className="sign-up-form-container">
			<h2>Do not have an Account?</h2>
			<p>Sign up with your email password</p>
			<Form method="post">
				<FormInput
					label="Display Name"
					inputdata={{
						required: true,
						name: 'displayName',
						type: 'name',
					}}
				/>
				<FormInput
					label="Email"
					inputdata={{
						required: true,
						name: 'email',
						type: 'text',
					}}
				/>
				<FormInput
					label="Password"
					inputdata={{
						required: true,
						name: 'password',
						type: 'password',
					}}
				/>
				<FormInput
					label="Confirm-Password"
					inputdata={{
						required: true,
						name: 'confirmPassword',
						type: 'password',
					}}
				/>
				<div className="form-actions">
					<Button classType={'default'} type="submit">
						Sign Up
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default SignUpForm;
