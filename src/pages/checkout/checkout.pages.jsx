import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-items/checkout-items';
import { CartContext } from '../../store/cart-context';
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from './checkout.styles';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	return (
		<CheckoutContainer>
			<CheckoutHeader>
				{['Product', 'Description', 'Name', 'Quantity', 'Remove'].map(
					(divNames) => (
						<HeaderBlock key={divNames}>{divNames}</HeaderBlock>
					)
				)}
			</CheckoutHeader>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} item={item} />
			))}
			<Total>Total: ₹{cartTotal}</Total>
		</CheckoutContainer>
	);
};

export default Checkout;
