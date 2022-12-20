import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
	showCart: false,
	setShowCart: () => null,
	cartItems: [],
	cartCount: 0,
	addCartItem: () => null,
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
const CartProvider = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		setCartCount(cartItems.reduce((prev, curr) => prev + curr.quantity, 0));
	}, [cartItems]);

	const addCartItem = (productAdd) => {
		setCartItems(addCart(cartItems, productAdd));
	};

	const value = { showCart, setShowCart, cartItems, addCartItem, cartCount };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
