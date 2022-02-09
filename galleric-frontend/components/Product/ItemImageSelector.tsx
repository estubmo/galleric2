import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { IImage, IMAGE_FORMATS } from '../../model/product';
import { fromImageToUrl } from '../../utils/urls';

interface ItemImageSelectorProps {
    images?: Array<IImage>;
    selectedImage?: IImage;
    setSelectedImage: React.Dispatch<React.SetStateAction<IImage | undefined>>;
}

export const ItemImageSelector = ({
    images,
    selectedImage,
    setSelectedImage
}: ItemImageSelectorProps): JSX.Element | null => {
    if (!images) return null;
    return (
        <div className="flex flex-wrap p-2">
            {images.map((image) => {
                return (
                    <button
                        className="focus-visible:underline focus:outline-none"
                        key={'painting-image-' + image.id}
                        onClick={() => setSelectedImage(image)}>
                        <motion.img
                            className={clsx(
                                'm-2 w-14 h-14 border border-transparent object-cover',
                                {
                                    'border-gray-100': selectedImage?.name === image.name
                                }
                            )}
                            src={fromImageToUrl(image, IMAGE_FORMATS.THUMBNAIL)}
                            alt={image.alternativeText}
                        />
                    </button>
                );
            })}
        </div>
    );
};
