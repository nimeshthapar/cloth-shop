import { CART_REDUCERS_TYPES } from './cart.types';

//HELPERS
const addCart = (cartItems, productAdd) => {
	const productIdx = cartItems.findIndex((prod) => prod.id === productAdd.id);

	if (productIdx >= 0) {
		const product = cartItems[productIdx];
		product.quantity++;
		cartItems[productIdx] = product;
		return [...cartItems];
	}
	return [...cartItems, { ...productAdd, quantity: 1 }];
};

const removeCart = (cartItems, productRemove) => {
	const productIdx = cartItems.findIndex(
		(prod) => prod.id === productRemove.id
	);

	if (cartItems[productIdx].quantity > 1) {
		const product = cartItems[productIdx];
		product.quantity--;
		cartItems[productIdx] = product;
		return [...cartItems];
	}
	return cartItems.filter((item) => item.id !== productRemove.id);
};

const clearcart = (cartItems, productRemove) => {
	return cartItems.filter((item) => item.id !== productRemove.id);
};

//ACTIONS
export const addCartItem = (cartItems, productAdd) => ({
	type: CART_REDUCERS_TYPES.UPDATE_CART,
	payload: {
		cartItems: addCart(cartItems, productAdd),
		price: productAdd.price,
		count: 1,
	},
});

export const removeCartItem = (cartItems, productRemove) => ({
	type: CART_REDUCERS_TYPES.UPDATE_CART,
	payload: {
		cartItems: removeCart(cartItems, productRemove),
		count: -1,
		price: -productRemove.price,
	},
});

export const clearCartItem = (cartItems, productRemove) => ({
	type: CART_REDUCERS_TYPES.UPDATE_CART,
	payload: {
		cartItems: clearcart(cartItems, productRemove),
		count: -productRemove.quantity,
		price: -(productRemove.price * productRemove.quantity),
	},
});

export const setShowCart = () => ({ type: CART_REDUCERS_TYPES.SET_SHOW_CART });
