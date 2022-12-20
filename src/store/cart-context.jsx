import { createContext, useEffect, useState } from 'react';

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

const CartProvider = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		setCartCount(cartItems.reduce((prev, curr) => prev + curr.quantity, 0));
		setCartTotal(
			cartItems.reduce(
				(prev, curr) => prev + curr.price * curr.quantity,
				0
			)
		);
	}, [cartItems]);

	const addCartItem = (productAdd) => {
		setCartItems(addCart(cartItems, productAdd));
	};

	const removeCartItem = (productRemove) => {
		setCartItems(removeCart(cartItems, productRemove));
	};

	const clearCartItem = (productRemove) => {
		setCartItems(clearcart(cartItems, productRemove));
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
