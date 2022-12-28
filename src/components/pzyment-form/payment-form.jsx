import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCartItem } from '../../store/cart/cart.actions';
import {
	FormContainer,
	PaymentFormContainer,
	PaymentButton,
} from './payment-fotm.styles';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [isLoading, setIsLoading] = useState(false);
	const { displayName } = useSelector((state) => state.user.user);
	const { cartTotal } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handlePayment = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) return;
		setIsLoading(true);
		const response = await fetch('/.netlify/functions/create-payment', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: cartTotal * 100 }),
		}).then((res) => res.json());
		const { client_secret } = response.paymentIntent;
		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: displayName ? displayName : 'Guest',
				},
			},
		});
		setIsLoading(false);

		if (paymentResult.error) {
			alert('Payment Failed');
		} else if (paymentResult.paymentIntent.status === 'succeeded') {
			alert('Payment Succesful');
			dispatch(emptyCartItem());
		}
	};
	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={handlePayment}>
				<h2>Card Details: </h2>
				<CardElement />
				<PaymentButton isLoading={isLoading} classType={'inverted'}>
					Pay Now
				</PaymentButton>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
