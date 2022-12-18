import { createBrowserRouter, redirect } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Auth from './pages/auth.page';
import Home from './pages/home.page';
import {
	createUserWithEmailHandler,
	createUserDocHandler,
	signInWithEmailAndPasswordHandler,
} from './util/firebase.util';

const authActionHandler = async ({ request }) => {
	const data = Object.fromEntries(await request.formData());
	if ('displayName' in data) {
		if (data.password !== data.confirmPassword) {
			alert("Password Doesn't Match");
			return null;
		}

		try {
			const { user } = await createUserWithEmailHandler(
				data.email,
				data.password
			);
			await createUserDocHandler(user, { displayName: data.displayName });
		} catch (err) {
			if (err.code === 'auth/email-already-in-use') {
				alert('User Already Exists');
			} else {
				console.log('Error Occured: ', err.message);
			}
			return null;
		}
	} else {
		try {
			const response = await signInWithEmailAndPasswordHandler(
				data.email,
				data.password
			);

			console.log(response);
		} catch (err) {
			switch (err.code) {
				case 'auth/wrong-password':
					alert('Incorrect Password');
					break;
				case 'auth/user-not-found':
					alert('No User Found!');
					break;
				default:
					console.log('Error Occured: ', err.message);
			}
			return null;
		}
	}
	console.log('here');

	return redirect('/');
};

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigation />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/shop',
				element: <h2>This is shop Page</h2>,
			},
			{
				path: '/auth',
				element: <Auth />,
				action: authActionHandler,
			},
			{
				path: '/cart',
				element: <h2>This is cart Page</h2>,
			},
		],
	},
]);
