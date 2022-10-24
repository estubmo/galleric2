import { motion } from 'framer-motion';
import React from 'react';

import { MenuButton } from './MenuButton';

interface Props {
    isOpen: boolean;
    onClick: () => void;
}

const NavBarHamburgerButton = ({ isOpen, onClick }: Props): JSX.Element => {
    return (
        <div className="relative z-50 flex items-center justify-center w-5 h-5">
            <motion.button
                className="focus:outline-none"
                whileTap={{ scale: 0.75 }}
                whileHover={{ scale: 1.1 }}
                whileFocus={{ scale: 1.5 }}
                style={{ originX: '50%', originY: '50%', willChange: 'transform' }}
                onClick={onClick}>
                <MenuButton
                    isOpen={isOpen}
                    width={20}
                    height={20}
                    className="w-5 h-5 text-gray-100 cursor-pointer focus-visible:underline focus:outline-none"
                />
            </motion.button>
        </div>
    );
};

export default NavBarHamburgerButton;
