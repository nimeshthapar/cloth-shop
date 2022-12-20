import React, { useContext } from 'react';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-items/checkout-items';
import { CartContext } from '../../store/cart-context';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	return (
		<div className="checkout-container">
			<div className="checkout-header">
				{['Product', 'Description', 'Name', 'Quantity', 'Remove'].map(
					(divNames) => (
						<div className="header-block" key={divNames}>
							{divNames}
						</div>
					)
				)}
			</div>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} item={item} />
			))}
			<span className="total">Total: ₹{cartTotal}</span>
		</div>
	);
};

export default Checkout;
