import React from 'react';

import { MenuButton } from './MenuButton';

interface Props {
    isOpen: boolean;
    onClick: () => void;
}

const NavBarHamburgerButton = ({ isOpen, onClick }: Props): JSX.Element => {
    return (
        <div className="relative z-50 flex items-center justify-center">
            <MenuButton
                isOpen={isOpen}
                width={20}
                height={20}
                onClick={onClick}
                className="absolute w-5 h-5 text-gray-100 cursor-pointer focus-visible:underline focus:outline-none"
            />
        </div>
    );
};

export default NavBarHamburgerButton;
