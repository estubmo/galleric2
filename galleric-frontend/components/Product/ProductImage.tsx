import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { IImage } from '../../model/product';
import { fromImageToUrl } from '../../utils/urls';

interface ProductImageProps {
    image: IImage;
    productSlug: string;
}

export const ProductImage = ({ productSlug, image }: ProductImageProps): JSX.Element => {
    console.log(
        '%cRetNemt%cline:13%cimage',
        'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
        'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
        'color:#fff;background:rgb(251, 178, 23);padding:3px;border-radius:2px',
        image
    );
    return (
        <motion.div layoutId={`product-img-${productSlug}`}>
            <Image
                layout="responsive"
                width={image.width}
                height={image.height}
                src={fromImageToUrl(image)}
                alt={image.alternativeText}
            />
        </motion.div>
    );
};
