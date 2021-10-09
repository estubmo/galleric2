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
            className={clsx(className, 'flex min-h-screen font-light tracking-widest pt-20')}>
            {children}
        </motion.div>
    );
};
