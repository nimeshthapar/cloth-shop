require('dotenv').config();
const stripe = require('stripe')(`${process.env.SECRET_KEY}`);

exports.handler = async (e) => {
	try {
		const { amount } = JSON.parse(e.body);
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: 'inr',
			payment_method_types: ['card'],
		});

		return { statusCode: 200, body: JSON.stringify({ paymentIntent }) };
	} catch (err) {
		console.log({ err });
		return { statusCode: 400, body: JSON.stringify({ err }) };
	}
};
