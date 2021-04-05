import React, { useEffect, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import StripeTestCards from '../components/StripeTestCards';
import { fetchPostJSON } from '../utils/api-helpers';

const CartSummary = (): JSX.Element => {
    const [loading, setLoading] = useState(false);
    const [cartEmpty, setCartEmpty] = useState(true);
    const {
        formattedTotalPrice,
        cartCount,
        clearCart,
        cartDetails,
        redirectToCheckout
    } = useShoppingCart();

    useEffect(() => setCartEmpty(!cartCount), [cartCount]);

    const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);

        const response = await fetchPostJSON('/api/checkout_sessions/cart', cartDetails);

        if (response.statusCode === 500) {
            console.error(response.message);
            return;
        }

        redirectToCheckout({ sessionId: response.id });
    };

    return (
        <div className="p-4">
            <form
                onSubmit={handleCheckout}
                className="mt-2 p-4 w-1/3 bg-gray-200 border border-gray-800 rounded-xl">
                <h2 className="text-blue-900 text-lg font-bold">Cart summary</h2>
                {/* This is where we'll render our cart */}
                <p suppressHydrationWarning>
                    <strong>Number of Items:</strong> {cartCount}
                </p>
                <p suppressHydrationWarning>
                    <strong>Total:</strong> {formattedTotalPrice}
                </p>

                {/* Redirects the user to Stripe */}
                <StripeTestCards />
                <div className="mt-2">
                    <button
                        className="mx-2 px-4 py-2 text-blue-100 focus-visible:underline font-medium bg-blue-500 border border-blue-600 rounded-xl focus:outline-none"
                        type="submit"
                        disabled={cartEmpty || loading}>
                        Checkout
                    </button>
                    <button
                        className="mx-2 px-4 py-2 text-blue-100 focus-visible:underline font-medium bg-blue-500 border border-blue-600 rounded-xl focus:outline-none"
                        type="button"
                        onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CartSummary;