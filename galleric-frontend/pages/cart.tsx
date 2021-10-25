import { NextPage } from 'next';
import React from 'react';

import Cart from '../components/Cart';
import CartSummary from '../components/CartSummary';

const CartPage: NextPage = () => {
    return (
        <div className="flex flex-col w-full px-4 bg-gray-900 md:pt-24">
            <div className="w-full mt-2 text-xl">
                <h1 className="text-2xl font-medium text-gray-800">Shopping Cart</h1>
                <p className="mt-2">
                    Powered by the{' '}
                    <a className="italic underline" href="https://useshoppingcart.com">
                        use-shopping-cart
                    </a>{' '}
                    React hooks library.
                </p>
            </div>
            <div className="w-full mt-2">
                <Cart>
                    <>
                        <CartSummary />
                        <div className="mt-2">
                            Show products here
                            {/* <Products /> */}
                        </div>
                    </>
                </Cart>
            </div>
        </div>
    );
};

export default CartPage;
