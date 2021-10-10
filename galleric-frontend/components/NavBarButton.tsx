import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface INavBarButtonProps {
    href: string;
    as: string;
    onClick: () => void;
    children: ReactNode;
}

const NavBarButton = ({ href, as, children, onClick }: INavBarButtonProps): JSX.Element => {
    return (
        <Link href={href} passHref as={as} shallow>
            <motion.button
                className="w-6 h-6 cursor-pointer focus:outline-none"
                whileTap={{ scale: 0.75 }}
                whileHover={{ scale: 1.1 }}
                whileFocus={{ scale: 1.2 }}
                style={{ originX: '50%', originY: '50%', willChange: 'transform' }}
                onClick={onClick}>
                <a>{children} </a>
            </motion.button>
        </Link>
    );
};

export default NavBarButton;
