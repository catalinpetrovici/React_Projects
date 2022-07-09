const dotenv = require('dotenv');

dotenv.config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);
// domain/.netlify/functions/create-payment-intent

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'RON',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: 'Create Payment Intent',
  };
};
