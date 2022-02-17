import React, { ReactNode } from 'react';
import { CartProvider } from 'use-shopping-cart/react';

import * as config from '../config';

interface Props {
    children: JSX.Element;
}
const Cart = ({ children }: Props): JSX.Element => (
    <CartProvider
        cartMode="checkout-session"
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
        currency={config.CURRENCY}>
        <>{children}</>
    </CartProvider>
);

export default Cart;
