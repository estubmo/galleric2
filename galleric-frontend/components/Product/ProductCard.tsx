import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { IProduct } from '../../model/product';
import { CloseButton } from '../CloseButton';
import { ProductImage } from './ProductImage';
import { ProductImageSelector } from './ProductImageSelector';

interface ProductCardProps {
    product: IProduct;
    isModal?: boolean;
    returnHref?: string;
}

export const ProductCard = ({
    product,
    isModal = false,
    returnHref = ''
}: ProductCardProps): JSX.Element => {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const router = useRouter();

    return (
        <>
            {product && (
                <motion.div
                    className="fixed top-0 left-0 flex justify-center w-full mt-20 text-gray-100 md:my-20 h-90v"
                    layoutId={`product-container-${product.slug}`}>
                    <div className="w-full lg:w-90v xl:max-w-screen-xl">
                        <PerfectScrollbar
                            options={{ wheelPropagation: false }}
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            containerRef={(ref: any) => {
                                if (ref) {
                                    // https://github.com/mdbootstrap/perfect-scrollbar/pull/934/files
                                    // injecting a fix for this issue
                                    ref._getBoundingClientRect = ref.getBoundingClientRect;
                                    ref.getBoundingClientRect = () => {
                                        const original = ref._getBoundingClientRect();
                                        return {
                                            ...original,
                                            height: Math.round(original.height)
                                        };
                                    };
                                }
                            }}>
                            <div className="relative bg-gray-800">
                                <div className="absolute top-0 right-0 z-50">
                                    {isModal && (
                                        <CloseButton
                                            className="m-2 text-gray-100 cursor-pointer focus-visible:underline focus:outline-none"
                                            close={() =>
                                                router.push(returnHref, undefined, {
                                                    shallow: true,
                                                    scroll: false
                                                })
                                            }
                                        />
                                    )}
                                </div>
                                {/* TODO: Add image zoom/scroll wrapper */}
                                <ProductImage productSlug={product.slug} image={selectedImage} />
                                <ProductImageSelector
                                    images={product.images}
                                    selectedImage={selectedImage}
                                    setSelectedImage={setSelectedImage}
                                />
                                <div className="p-4">
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
                                </div>
                                <div className="p-4 mb-14 font-extralight">
                                    <ReactMarkdown>{product.content}</ReactMarkdown>
                                </div>
                            </div>
                        </PerfectScrollbar>
                    </div>
                </motion.div>
            )}
        </>
    );
};
