import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { formatCurrencyString } from 'use-shopping-cart';

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
                    className="relative m-2 mt-24 overflow-hidden text-gray-100 bg-gray-800 w-100v h-100v md:w-60v md:h-80v"
                    layoutId={`product-container-${product.slug}`}>
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

                                    return { ...original, height: Math.round(original.height) };
                                };
                            }
                        }}>
                        <div className="relative">
                            <div className="absolute top-0 right-0">
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

                            <ProductImage productSlug={product.slug} image={selectedImage} />

                            <ProductImageSelector
                                images={product.images}
                                selectedImage={selectedImage}
                                setSelectedImage={setSelectedImage}
                            />

                            <div className="p-4">
                                <div className="flex justify-between">
                                    <motion.h2
                                        className="font-bold"
                                        layoutId={`product-name-${product.slug}`}>
                                        {product.name}
                                    </motion.h2>
                                    <motion.p
                                        className="font-mono"
                                        layoutId={`product-price-${product.slug}`}>
                                        {formatCurrencyString({
                                            value: product.price,
                                            currency: product.currency
                                        })}
                                    </motion.p>
                                </div>
                            </div>
                            <div className="p-4 mb-14 font-extralight">
                                <ReactMarkdown>{product.content}</ReactMarkdown>
                            </div>
                        </div>
                    </PerfectScrollbar>
                </motion.div>
            )}
        </>
    );
};
