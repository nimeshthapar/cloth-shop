import { createBrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Auth from './pages/auth.page';
import Home from './pages/home.page';

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
			},
			{
				path: '/cart',
				element: <h2>This is cart Page</h2>,
			},
		],
	},
]);
