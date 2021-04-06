import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { formatCurrencyString } from 'use-shopping-cart';

import { IProduct } from '../../model/product';
import { MenuButton } from '../MenuButton';
import { ProductImage } from './ProductImage';
import { ProductImageSelector } from './ProductImageSelector';

interface ProductCardProps {
    product: IProduct;
    isModal?: boolean;
}

export const ProductCard = ({ product, isModal = false }: ProductCardProps): JSX.Element => {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const router = useRouter();

    return (
        <>
            {product && (
                <motion.div
                    className="relative m-2 mt-24 w-100v h-100v text-gray-100 bg-gray-800 overflow-hidden md:w-60v md:h-80v"
                    layoutId={`product-container-${product.slug}`}>
                    <PerfectScrollbar
                        options={{ wheelPropagation: false }}
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
                            <div className="absolute right-0 top-0">
                                {isModal && (
                                    <button
                                        className="flex items-center justify-center m-2 w-8 h-8 text-gray-900 focus-visible:underline focus:outline-none cursor-pointer"
                                        onClick={() => router.back()}>
                                        <MenuButton isOpen={true} />
                                    </button>
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
                            <div className="mb-14 p-4 font-extralight">
                                <ReactMarkdown>{product.content}</ReactMarkdown>
                            </div>
                        </div>
                    </PerfectScrollbar>
                </motion.div>
            )}
        </>
    );
};
