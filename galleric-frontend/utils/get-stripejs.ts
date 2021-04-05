/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getStripe = () => {
    if (!stripePromise) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    }
    return stripePromise;
};

export default getStripe;
