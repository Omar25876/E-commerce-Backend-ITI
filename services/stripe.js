// 1. Import the Stripe package
const Stripe = require("stripe");

// 2. Initialize Stripe with your secret key (from .env)
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// 3. Create a Payment Intent function
async function createPaymentIntent(amount, currency) {
  return await stripe.paymentIntents.create({
    amount,
    currency,
    payment_method_types: ["card"],
  });
}

// 4. Export the function to use it in other files
module.exports = {
  createPaymentIntent,
};


/**
 * Secret Key: This key should be kept secure and only used in your backend.
 * Publishable Key: This key is used in the frontend and is public.
 * Create a Payment Intent (Backend)
 * The first step in the Stripe process is creating a PaymentIntent on the server.
 * This is an object that represents your intent to collect payment and helps you
 * collect payment information securely.
 
 * Backend Request to Create PaymentIntent, you need to create a route to generate a payment intent
 */