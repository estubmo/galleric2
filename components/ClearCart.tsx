import React, { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

export default function ClearCart(): JSX.Element {
    const { clearCart } = useShoppingCart();

    useEffect(() => clearCart(), [clearCart]);

    return <p>Cart cleared.</p>;
}
