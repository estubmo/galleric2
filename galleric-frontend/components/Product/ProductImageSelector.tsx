import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { IImage } from '../../model/product';
import { fromImageToUrl } from '../../utils/urls';

interface ProductImageSelectorProps {
    images: Array<IImage>;
    selectedImage: IImage;
    setSelectedImage: React.Dispatch<React.SetStateAction<IImage>>;
}

export const ProductImageSelector = ({
    images,
    selectedImage,
    setSelectedImage
}: ProductImageSelectorProps): JSX.Element => {
    return (
        <div className="flex flex-wrap p-2">
            {images.map((image) => {
                return (
                    <button
                        className="focus-visible:underline focus:outline-none"
                        key={'product-image-' + image.name}
                        onClick={() => setSelectedImage(image)}>
                        <motion.img
                            className={clsx(
                                'm-2 w-14 h-14 border border-transparent object-cover',
                                {
                                    'border-gray-100': selectedImage.name === image.name
                                }
                            )}
                            src={fromImageToUrl(image)}
                            alt={image.alternativeText}
                        />
                    </button>
                );
            })}
        </div>
    );
};
