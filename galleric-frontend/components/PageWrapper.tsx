import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

import { containerVariants } from '../utils/variants';

interface IPageWrapperProps {
    children: ReactNode;
}

export const PageWrapper = ({ children }: IPageWrapperProps): JSX.Element => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            // exit="exit"
            variants={containerVariants}
            className="flex items-center justify-center pt-14 h-screen bg-gray-900">
            {children}
        </motion.div>
    );
};