import Link from 'next/link';
import React, { ReactNode } from 'react';

interface INavBarButtonProps {
    href: string;
    as: string;
    children: ReactNode;
}

const NavBarButton = ({ href, as, children }: INavBarButtonProps): JSX.Element => {
    return (
        <Link href={href} passHref as={as} shallow>
            <button className="w-6 h-6 border border-transparent cursor-pointer focus-visible:border-gray-100 focus:outline-none">
                <a>{children} </a>
            </button>
        </Link>
    );
};

export default NavBarButton;
