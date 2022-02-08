import axios from 'axios';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Modal from '../components/Modal';
import { ProductCard } from '../components/Product/ProductCard';
import Products from '../components/Product/Products';
import { IProduct, IProducts } from '../model/product';
import { API_URL } from '../utils/urls';
import { childrenVariants, containerVariants } from '../utils/variants';

const Gallery = ({ products }: IProducts): JSX.Element => {
    const router = useRouter();
    const [selectedProduct, setSelectedProduct] = useState<IProduct>(products[0]);
    useEffect(() => {
        if (router.query.product && products && products.length > 0) {
            const product = products.find((product) => product.slug === router.query.product);
            if (product) setSelectedProduct(product);
        }
    }, [router.query.product, products]);
    return (
        <>
            <AnimateSharedLayout>
                <div className="flex flex-col items-center w-full min-h-screen bg-gray-900">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        className="flex flex-col w-full p-14 max-w-screen-2xl">
                        <motion.div variants={childrenVariants}>
                            <Products products={products} />
                        </motion.div>
                    </motion.div>
                </div>
                <Modal showModal={!!router.query.product} returnHref={router.pathname}>
                    <ProductCard product={selectedProduct} isModal returnHref={router.pathname} />
                </Modal>
            </AnimateSharedLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get(`${API_URL}/products/`);

    const products = res.data;
    return { props: { products }, revalidate: 60 };
};

export default Gallery;