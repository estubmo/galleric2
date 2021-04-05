import React from 'react';
import { CartProvider } from 'use-shopping-cart';

import * as config from '../config';
import getStripe from '../utils/get-stripejs';

interface Props {
    children: JSX.Element;
}
const Cart = ({ children }: Props): JSX.Element => {
    return (
        <CartProvider mode="checkout-session" stripe={getStripe()} currency={config.CURRENCY}>
            {children}
        </CartProvider>
    );
};

export default Cart;
