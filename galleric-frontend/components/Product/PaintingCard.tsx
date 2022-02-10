import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { IImage, IPainting } from '../../model/product';
import { CloseButton } from '../CloseButton';
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
    const { images } = painting;
    const firstImage = images.find((x) => x !== undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingImage, setLoadingImage] = useState<IImage | undefined>(firstImage);
    const [selectedImage, setSelectedImage] = useState<IImage | undefined>(firstImage);

    const handleSetSelectedImage = (image: IImage): void => {
        console.log(
            '%cGalleric%cline:29%cimage',
            'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
            'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
            'color:#fff;background:rgb(3, 101, 100);padding:3px;border-radius:2px',
            image
        );
        if (!isLoading) {
            setLoadingImage(image);
            setIsLoading(true);
        }
    };
    const handleLoadingComplete = (): void => {
        console.log(
            '%cGalleric%cline:42%chandleLoadingComplete',
            'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
            'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
            'color:#fff;background:rgb(217, 104, 49);padding:3px;border-radius:2px'
        );
        if (isLoading) {
            setSelectedImage(loadingImage);
            setLoadingImage(undefined);
            setIsLoading(false);
        }
    };

    const router = useRouter();

    return (
        <>
            {painting && (
                <>
                    <div>isLoading: {isLoading ? 'true' : 'false'}</div>
                    <div>loadingImage.name: {loadingImage?.name}</div>
                    <div>selectedImage: {selectedImage?.name}</div>
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
                                            <motion.h3
                                                className="font-mono text-sm tracking-widest uppercase md:text-base"
                                                layoutId={`painting-name-${painting.slug}`}>
                                                {painting.name}
                                            </motion.h3>
                                            {/* <motion.p
                                                className="font-mono"
                                                layoutId={`painting-price-${painting.slug}`}>
                                                {formatCurrencyString({
                                                    value: painting.price,
                                                    currency: painting.currency
                                                })}
                                            </motion.p> */}
                                        </div>
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
