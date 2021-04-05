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

const Store = ({ products }: IProducts): JSX.Element => {
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
            <AnimateSharedLayout type="crossfade">
                <div className="flex flex-col items-center w-full min-h-screen bg-gray-900">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        className="flex flex-col m-14 p-4 w-full max-w-screen-2xl">
                        <motion.h1
                            className="text-4xl font-bold tracking-wider"
                            variants={childrenVariants}>
                            Welcome to the store
                        </motion.h1>
                        <motion.h2
                            className="text-gray-200 italic font-light tracking-widest"
                            variants={childrenVariants}>
                            This is a subtitle explaining why what and how this page is used
                        </motion.h2>

                        <motion.p
                            className="clear-none mt-4 font-extralight tracking-wider leading-6"
                            variants={childrenVariants}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus
                            delectus excepturi numquam atque officia porro quas vitae? Dolorem
                            pariatur enim fugiat similique assumenda ex quae quas et neque harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus
                            delectus excepturi numquam atque officia porro quas vitae? Dolorem
                            pariatur enim fugiat similique assumenda ex quae quas et neque harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus
                            delectus excepturi numquam atque officia porro quas vitae? Dolorem
                            pariatur enim fugiat similique assumenda ex quae quas et neque harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus
                            delectus excepturi numquam atque officia porro quas vitae? Dolorem
                            pariatur{' '}
                            <span className="italic font-bold">enim fugiat similique </span>
                            assumenda ex quae quas et neque harum. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quam minus delectus excepturi numquam
                        </motion.p>
                        <motion.div variants={childrenVariants}>
                            <Products products={products} />
                        </motion.div>
                    </motion.div>
                </div>
                <Modal showModal={!!router.query.product} fromPath={router.pathname}>
                    <ProductCard product={selectedProduct} isModal />
                </Modal>
            </AnimateSharedLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get(`${API_URL}/products/`);
    const products = res.data;
    return { props: { products } };
};

export default Store;
