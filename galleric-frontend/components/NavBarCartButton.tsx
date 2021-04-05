import Link from 'next/link';
import React from 'react';
import { Url } from 'url';

import CartButton from './CartButton';

interface INavBarCartButtonProps {
    href: string;
    as: string;
}

const NavBarCartButton = ({ href, as }: INavBarCartButtonProps): JSX.Element => {
    return (
        <Link href={href} passHref as={as}>
            <button className="mr-4 mt-4 w-6 h-6 border focus-visible:border-gray-100 border-transparent focus:outline-none cursor-pointer">
                <a>
                    <CartButton className="text-gray-100" />
                </a>
            </button>
        </Link>
    );
};

export default NavBarCartButton;
