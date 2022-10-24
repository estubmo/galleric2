import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { IImage, IPainting, IStripeProduct } from '../../model/product';
import { CURRENCIES, getFormattedPriceString } from '../../utils/currency';
import { marshalProductToStripe } from '../../utils/products';
import { CloseButton } from '../Buttons/CloseButton';
import { ItemImage } from './ItemImage';
import { ItemImageSelector } from './ItemImageSelector';

interface PaintingCardProps {
    painting: IPainting;
    isModal?: boolean;
    returnHref?: string;
}

export const PaintingCard = ({
    painting,
    isModal = false,
    returnHref = ''
}: PaintingCardProps): JSX.Element => {
    const { images, product } = painting;
    const firstImage = images.find((x) => x !== undefined);
    const [loadingImage, setLoadingImage] = useState<IImage | undefined>(firstImage);
    const [selectedImage, setSelectedImage] = useState<IImage | undefined>(firstImage);

    const handleSetSelectedImage = (image: IImage): void => {
        setLoadingImage(image);
    };
    const handleLoadingComplete = (image: IImage): void => {
        setSelectedImage(image);
        setLoadingImage(undefined);
    };
    let marshalledProduct: IStripeProduct | undefined;
    if (product) {
        const mappedProduct = {
            ...product,
            painting: painting
        };
        marshalledProduct = marshalProductToStripe(mappedProduct);
    }

    const router = useRouter();

    return (
        <>
            {painting && (
                <>
                    <motion.div
                        className="fixed top-0 left-0 flex justify-center w-full mt-20 text-gray-100 md:my-20 h-90v"
                        layoutId={`painting-container-${painting.slug}`}>
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
                                    <ItemImage
                                        slug={painting.slug}
                                        image={selectedImage}
                                        loadingImage={loadingImage}
                                        onLoadingComplete={handleLoadingComplete}
                                    />
                                    <ItemImageSelector
                                        images={painting.images}
                                        selectedImage={loadingImage || selectedImage}
                                        setSelectedImage={handleSetSelectedImage}
                                    />
                                    <div className="p-4">
                                        <div className="flex justify-between">
                                            <motion.h3 className="font-mono text-sm tracking-widest uppercase md:text-base">
                                                {painting.name}
                                            </motion.h3>
                                            {product && marshalledProduct && (
                                                <>
                                                    <motion.p className="font-mono">
                                                        {getFormattedPriceString(
                                                            product.price,
                                                            CURRENCIES.EUR
                                                        )}
                                                    </motion.p>
                                                </>
                                            )}
                                        </div>
                                        {product && marshalledProduct && (
                                            <>
                                                <button
                                                    className="px-4 py-2 font-bold text-gray-800 bg-white rounded-full"
                                                    onClick={() => {
                                                        console.log('add item');
                                                    }}>
                                                    Add to cart
                                                </button>
                                                <button
                                                    className="px-4 py-2 font-bold text-gray-800 bg-white rounded-full"
                                                    onClick={() => {
                                                        console.log('remove item');
                                                    }}>
                                                    Remove
                                                </button>
                                            </>
                                        )}
                                    </div>
                                    <div className="p-4 mb-14 font-extralight">
                                        <ReactMarkdown>{painting.content}</ReactMarkdown>
                                    </div>
                                </div>
                            </PerfectScrollbar>
                        </div>
                    </motion.div>
                </>
            )}
        </>
    );
};
