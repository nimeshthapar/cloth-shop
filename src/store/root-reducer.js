import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoryReducer } from './categories/categories.reducer';
import { cartReducer } from './cart/cart.reducer';

export default combineReducers({
	user: userReducer,
	categories: categoryReducer,
	cart: cartReducer,
});
