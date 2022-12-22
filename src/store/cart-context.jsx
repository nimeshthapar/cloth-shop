import { createContext, useReducer } from 'react';

export const CartContext = createContext({
	showCart: false,
	setShowCart: () => null,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
	addCartItem: () => null,
	removeCartItem: () => null,
	clearCartItem: () => null,
});

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

const INITIAL_STATE = {
	cartItems: [],
	showCart: false,
	cartCount: 0,
	cartTotal: 0,
};

const CART_REDUCERS_TYPES = {
	SET_SHOW_CART: 'SET_SHOW_CART',
	UPDATE_CART: 'UPDATE_CART',
};

const cartReducer = (state, { type, payload }) => {
	switch (type) {
		case CART_REDUCERS_TYPES.UPDATE_CART:
			return {
				...state,
				cartItems: payload.cartItems,
				cartCount: state.cartCount + payload.count,
				cartTotal: state.cartTotal + payload.price,
			};
		case CART_REDUCERS_TYPES.SET_SHOW_CART:
			return { ...state, showCart: !state.showCart };
		default:
			throw new Error(`Unknown Type '${type}' Passed in CartReducer`);
	}
};

const CartProvider = ({ children }) => {
	const [{ cartItems, showCart, cartCount, cartTotal }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

	const addCartItem = (productAdd) => {
		dispatch({
			type: CART_REDUCERS_TYPES.UPDATE_CART,
			payload: {
				cartItems: addCart(cartItems, productAdd),
				price: productAdd.price,
				count: 1,
			},
		});
	};

	const removeCartItem = (productRemove) => {
		dispatch({
			type: CART_REDUCERS_TYPES.UPDATE_CART,
			payload: {
				cartItems: removeCart(cartItems, productRemove),
				count: -1,
				price: -productRemove.price,
			},
		});
	};

	const clearCartItem = (productRemove) => {
		dispatch({
			type: CART_REDUCERS_TYPES.UPDATE_CART,
			payload: {
				cartItems: clearcart(cartItems, productRemove),
				count: -productRemove.quantity,
				price: -(productRemove.price * productRemove.quantity),
			},
		});
	};

	const setShowCart = () => {
		dispatch({ type: CART_REDUCERS_TYPES.SET_SHOW_CART });
	};

	const value = {
		showCart,
		setShowCart,
		cartItems,
		addCartItem,
		cartCount,
		removeCartItem,
		clearCartItem,
		cartTotal,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
