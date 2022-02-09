import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { IImage, IMAGE_FORMATS } from '../../model/product';
import { fromImageToUrl } from '../../utils/urls';

interface ItemImageProps {
    image?: IImage;
    loadingImage?: IImage;
    slug: string;
    onLoadingComplete: () => void;
}

export const ItemImage = ({
    slug,
    image,
    loadingImage,
    onLoadingComplete
}: ItemImageProps): JSX.Element => {
    if (!image) return <></>;

    return (
        <motion.div layoutId={`item-img-${slug}`}>
            <Image
                className={clsx(
                    'transition duration-1000 ease-in-out',
                    loadingImage ? ' opacity-25' : 'opacity-100'
                )}
                layout="responsive"
                width={image.width}
                height={image.height}
                onLoadingComplete={onLoadingComplete}
                src={fromImageToUrl(loadingImage || image, IMAGE_FORMATS.LARGE)}
                blurDataURL={fromImageToUrl(loadingImage || image, IMAGE_FORMATS.THUMBNAIL)}
                placeholder="blur"
                quality={80}
                alt={image.alternativeText}
            />
        </motion.div>
    );
};
