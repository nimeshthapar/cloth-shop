import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-items/checkout-items';
import { CartContext } from '../../store/cart-context';

const Checkout = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default Checkout;
