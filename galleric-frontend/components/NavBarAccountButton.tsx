import Link from 'next/link';
import React from 'react';

import AccountButton from './AccountButton';

interface INavBarAccountButtonProps {
    href: string;
    as: string;
}

const NavBarAccountButton = ({ href, as }: INavBarAccountButtonProps): JSX.Element => {
    return (
        <Link href={href} passHref as={as} shallow>
            <button className="mr-4 mt-4 w-6 h-6 border focus-visible:border-gray-100 border-transparent focus:outline-none cursor-pointer">
                <a>
                    <AccountButton className="text-gray-100" />
                </a>
            </button>
        </Link>
    );
};

export default NavBarAccountButton;
