import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface INavBarButtonProps {
    href: string;
    as?: string;
    onClick: () => void;
    disabled?: boolean;
    children: ReactNode;
}

const NavBarButton = ({
    href,
    as,
    children,
    disabled = false,
    onClick
}: INavBarButtonProps): JSX.Element => {
    return (
        <Link href={href} passHref as={as} shallow>
            <motion.button
                className={clsx(
                    'w-6 h-6  focus:outline-none',
                    disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                )}
                whileTap={{ scale: disabled ? 1 : 0.75 }}
                whileHover={{ scale: disabled ? 1 : 1.1 }}
                whileFocus={{ scale: disabled ? 1 : 1.2 }}
                disabled={disabled}
                style={{ originX: '50%', originY: '50%', willChange: 'transform' }}
                onClick={onClick}>
                <a>{children} </a>
            </motion.button>
        </Link>
    );
};

export default NavBarButton;
