import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Auth from './pages/auth/auth.page';
import Checkout from './pages/checkout/checkout.pages';
import ErrorPage from './pages/error-page/error.pages';
import Home from './pages/home/home.page';
import Category from './pages/shop-category/category.pages';
import Shop from './pages/shop/shop.pages';
import { fetchCategoriesStart } from './store/categories/categories.actions';
import {
	checkUser,
	emailSignInStart,
	signUpStart,
} from './store/user/user.actions';

const App = () => {
	const dispatch = useDispatch();

	const authActionHandler = async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		if ('displayName' in data) {
			if (data.password !== data.confirmPassword) {
				alert("Password Doesn't Match");
				return null;
			}

			try {
				dispatch(
					signUpStart(data.email, data.password, data.displayName)
				);
			} catch (err) {
				if (err.code === 'auth/email-already-in-use') {
					alert('User Already Exists');
				} else {
					console.log('Error Occured: ', err.message);
				}
			}
		} else {
			try {
				dispatch(emailSignInStart(data.email, data.password));
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

		return redirect('/');
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
					path: '/auth',
					element: <Auth />,
					action: authActionHandler,
				},
				{
					path: '/checkout',
					element: <Checkout />,
				},
				{
					path: '/shop/*',
					children: [
						{
							index: true,
							element: <Shop />,
						},
						{
							path: ':category',
							element: <Category />,
						},
					],
				},
			],
		},
	]);

	useEffect(() => {
		dispatch(checkUser());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchCategoriesStart());
	}, [dispatch]);

	return <RouterProvider router={router} />;
};

export default App;
