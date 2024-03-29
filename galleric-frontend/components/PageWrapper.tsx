import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

import { pageWrapperVariants } from '../utils/variants';

interface IPageWrapperProps {
    children: ReactNode;
    className?: string;
}

export const PageWrapper = ({ children, className }: IPageWrapperProps): JSX.Element => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageWrapperVariants}
            className={clsx(
                className,
                'flex min-h-screen mx-4 md:mx-8 lg:mx-16 font-light tracking-widest'
            )}>
            {children}
        </motion.div>
    );
};
