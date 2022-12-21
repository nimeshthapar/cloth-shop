import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './App';
import UserProvider from './store/user-context';
import CartProvider from './store/cart-context';
import CategoriesProvider from './store/categories-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//<React.StrictMode>
	<UserProvider>
		<CategoriesProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</CategoriesProvider>
	</UserProvider>
	//</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
