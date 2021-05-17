import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import useUser from '../lib/useUser';
import Cart from './Cart';
import CartSummary from './CartSummary';
import { CloseButton } from './CloseButton';
import Menu from './Menu';
import Modal from './Modal';
import NavBarAccountButton from './NavBarAccountButton';
import NavBarCartButton from './NavBarCartButton';

interface Links {
    href: string;
    as: string;
}
const signInLink = { href: '/sign?sign=in', as: '/signin' };
const accountLink = { href: '/account', as: '/account' };

const NavBar = (): JSX.Element => {
    const router = useRouter();

    const [link, setLink] = useState<Links>(signInLink);

    const { user } = useUser();

    useEffect(() => {
        if (user) {
            setLink(accountLink);
        } else {
            setLink(signInLink);
        }
    }, [user]);

    return (
        <>
            <nav className="fixed z-20 flex items-start justify-between w-full h-auto">
                <div className="flex-1"></div>

                <div className="flex-none">
                    <Menu />
                </div>
                <div className="flex-1">
                    <div className="flex justify-end p-4">
                        <NavBarAccountButton href={link.href} as={link.as} />
                        <NavBarCartButton href="?openCart=true" as="/cart" />
                    </div>
                </div>
            </nav>
            <Modal showModal={!!router.query.openCart} fromPath={router.pathname}>
                <div className="z-40 flex flex-col m-8 p-4 bg-gray-900 rounded-xl">
                    <Cart>
                        <div className="relative">
                            <div className="absolute right-0 top-0">
                                <CloseButton
                                    className="text-gray-100 focus-visible:underline focus:outline-none cursor-pointer"
                                    close={() => router.back()}
                                />
                            </div>
                            <CartSummary />
                        </div>
                    </Cart>
                </div>
            </Modal>
        </>
    );
};

export default NavBar;
