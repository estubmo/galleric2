import { motion } from 'framer-motion';
import React from 'react';

import { PageWrapper } from '../components/PageWrapper';
import { containerVariants } from '../utils/variants';

const CartPage = (): JSX.Element => {
    return (
        <PageWrapper className="justify-center w-full h-full max-w-screen-xl">
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="flex flex-col w-full p-4 mt-24">
                <ul>
                    <li>Cart items</li>
                </ul>
            </motion.div>
        </PageWrapper>
    );
};

export default CartPage;
