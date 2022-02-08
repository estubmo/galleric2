import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { IProduct } from '../../model/product';
import { fromImageToUrl } from '../../utils/urls';

interface Props {
    product: IProduct;
}

const Product = ({ product }: Props): JSX.Element => {
    return (
        <motion.div
            className="w-full m-2 text-gray-100 cursor-pointer"
            initial="hidden"
            animate="visible"
            layoutId={`product-container-${product.slug}`}>
            <Link href={`?product=${product.slug}`} as={`/products/${product.slug}`} scroll={false}>
                <a>
                    <motion.img
                        layoutId={`product-img-${product.slug}`}
                        src={fromImageToUrl(product.images[0])}
                        alt={product.name}
                    />
                    <div className="flex justify-between">
                        <motion.h3
                            className="font-mono text-sm tracking-widest uppercase md:text-base"
                            layoutId={`product-name-${product.slug}`}>
                            {product.name}
                        </motion.h3>
                        {/* <motion.p
                                className="font-mono"
                                layoutId={`product-price-${product.slug}`}>
                                {formatCurrencyString({
                                    value: product.price,
                                    currency: product.currency
                                })}
                            </motion.p> */}
                    </div>
                </a>
            </Link>
        </motion.div>
    );
};

export default Product;
