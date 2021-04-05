import React from 'react';

import { MenuButton } from './MenuButton';

interface Props {
    isOpen: boolean;
    onClick: () => void;
}

const NavBarHamburgerButton = ({ isOpen, onClick }: Props): JSX.Element => {
    return (
        <div className="relative z-50 flex items-center justify-center">
            <button
                className="absolute top-4 w-5 h-5 focus-visible:underline focus:outline-none cursor-pointer"
                onClick={onClick}>
                <MenuButton isOpen={isOpen} width={20} height={20} className="text-gray-100" />
            </button>
        </div>
    );
};

export default NavBarHamburgerButton;
