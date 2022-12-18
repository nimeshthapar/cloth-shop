import { Form, useNavigate } from 'react-router-dom';
import {
	createUserDocHandler,
	signInWithGooglePopup,
} from '../../util/firebase.util';
import Button from '../button/button';
import FormInput from '../form-input/form-input';

const SignInForm = () => {
	const navigate = useNavigate();
	const signInGoogleHandler = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocHandler(user);
		navigate('/');
	};
	return (
		<div className="sign-in-form-container">
			<h2>Already have an Account?</h2>
			<p>Sign in with your email password</p>
			<Form method="post">
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
				<div className="form-actions">
					<Button classType={'default'} type="submit">
						Sign In
					</Button>
					<Button
						classType={'google'}
						type="button"
						onClick={signInGoogleHandler}
					>
						Google Sign In
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default SignInForm;
