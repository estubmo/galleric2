import { motion } from 'framer-motion';
import React from 'react';

import { IImage } from '../../model/product';
import { fromImageToUrl } from '../../utils/urls';

interface ProductImageProps {
    image: IImage;
    productSlug: string;
}

export const ProductImage = ({ productSlug, image }: ProductImageProps): JSX.Element => {
    return (
        <motion.img
            layoutId={`product-img-${productSlug}`}
            className="w-full h-96 object-cover"
            src={fromImageToUrl(image)}
            alt={image.alternativeText}
        />
    );
};
