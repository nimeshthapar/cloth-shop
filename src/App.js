import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Auth from './pages/auth/auth.page';
import ErrorPage from './pages/error-page/error.pages';
import Home from './pages/home/home.page';
import Shop from './pages/shop/shop.pages';
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
			await createUserDocHandler(user, {
				displayName: data.displayName,
			});
		} catch (err) {
			if (err.code === 'auth/email-already-in-use') {
				alert('User Already Exists');
			} else {
				console.log('Error Occured: ', err.message);
			}
		}
	} else {
		try {
			await signInWithEmailAndPasswordHandler(data.email, data.password);
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
		}
	}

	return null;
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigation />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/shop',
				element: <Shop />,
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

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
