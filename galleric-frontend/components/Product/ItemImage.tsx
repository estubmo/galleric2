import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { IImage } from '../../model/product';
import { fromImageToUrl } from '../../utils/urls';

interface ItemImageProps {
    image?: IImage;
    slug: string;
}

export const ItemImage = ({ slug, image }: ItemImageProps): JSX.Element => {
    if (!image) return <div></div>;

    return (
        <motion.div layoutId={`item-img-${slug}`}>
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
