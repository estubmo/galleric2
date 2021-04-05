import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { useWindowSize } from '../../hooks/useWindowSize';
import { IProducts } from '../../model/product';
import { Breakpoints } from '../../utils/breakpoints';
import Product from './Product';

export const containerVariants = {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { staggerChildren: 0.4, duration: 0.5 }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

const Products = ({ products }: IProducts): JSX.Element => {
    const size = useWindowSize();
    const { scrollYProgress } = useViewportScroll();

    const col1Scroll = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const col2Scroll = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const physics = { damping: 100, mass: 0.27, stiffness: 800 };
    const col1ScrollSpring = useSpring(col1Scroll, physics);
    const col2ScrollSpring = useSpring(col2Scroll, physics);

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: {
            opacity: 0,
            y: 50
        }
    };

    return (
        <motion.section
            className="grid gap-4 grid-cols-1 mt-4 w-full text-gray-900 md:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}>
            {products.map((product, index) => (
                <motion.div
                    className="m-6 sm:m-12 md:m-24 lg:m-36"
                    variants={variants}
                    key={product.slug}
                    style={{
                        y:
                            size && size.width && size.width >= Breakpoints.MD
                                ? index % 2 === 0
                                    ? col1ScrollSpring
                                    : col2ScrollSpring
                                : col1ScrollSpring
                    }}>
                    <Product product={product} />
                </motion.div>
            ))}
        </motion.section>
    );
};

export default Products;
