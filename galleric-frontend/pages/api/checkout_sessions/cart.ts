/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { NextApiRequest } from 'next';
import Stripe from 'stripe';
/*
 * Product data can be loaded from anywhere. In this case, we’re loading it from
 * a local JSON file, but this could also come from an async call to your
 * inventory management service, a database query, or some other API call.
 *
 * The important thing is that the product info is loaded from somewhere trusted
 * so you know the pricing information is accurate.
 */
import { validateCartItems } from 'use-shopping-cart/src/serverUtil';

import { API_URL } from '../../../utils/urls';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-08-27'
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function handler(req: NextApiRequest, res: any) {
    if (req.method === 'POST') {
        try {
            const response = await axios.get(`${API_URL}/products/`);
            const products = response.data;
            // Validate the cart details that were sent from the client.
            const cartItems = req.body;
            const line_items = validateCartItems(products, cartItems);
            // Create Checkout Sessions from body params.
            const params: Stripe.Checkout.SessionCreateParams = {
                submit_type: 'pay',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_address_collection: {
                    allowed_countries: ['US', 'CA']
                },
                line_items,
                success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/use-shopping-cart`
            };
            const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
                params
            );

            res.status(200).json(checkoutSession);
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
