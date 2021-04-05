import { NextPage } from 'next';
import React from 'react';

import Cart from '../components/Cart';
import CartSummary from '../components/CartSummary';
import Products from '../components/Product/Products';

const CartPage: NextPage = () => {
    return (
        <div className="flex flex-col px-4 w-full bg-gray-900 md:pt-24">
            <div className="mt-2 w-full text-xl">
                <h1 className="text-gray-800 text-2xl font-medium">Shopping Cart</h1>
                <p className="mt-2">
                    Powered by the{' '}
                    <a className="underline italic" href="https://useshoppingcart.com">
                        use-shopping-cart
                    </a>{' '}
                    React hooks library.
                </p>
            </div>
            <div className="mt-2 w-full">
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
