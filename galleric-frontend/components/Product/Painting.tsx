import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { IMAGE_FORMATS, IPainting } from '../../model/product';
import { fromImageToUrl } from '../../utils/urls';

interface Props {
    painting: IPainting;
}

const Painting = ({ painting }: Props): JSX.Element => {
    return (
        <motion.div
            className="w-full m-2 text-gray-100 cursor-pointer"
            initial="hidden"
            animate="visible"
            layoutId={`painting-container-${painting.slug}`}>
            <Link
                href={`?painting=${painting.slug}`}
                as={`/paintings/${painting.slug}`}
                scroll={false}>
                <a>
                    <motion.img
                        layoutId={`item-img-${painting.slug}`}
                        src={fromImageToUrl(painting.images[0], IMAGE_FORMATS.SMALL)}
                        alt={painting.name}
                    />
                    <div className="flex justify-between">
                        <motion.h3
                            className="font-mono text-sm tracking-widest uppercase md:text-base"
                            layoutId={`painting-name-${painting.slug}`}>
                            {painting.name}
                        </motion.h3>
                        {/* <motion.p
                                className="font-mono"
                                layoutId={`product-price-${product.slug}`}>
                                {formatCurrencyString({
                                    value: product.price,
                                    currency: product.currency
                                })}
                            </motion.p> */}
                    </div>
                </a>
            </Link>
        </motion.div>
    );
};

export default Painting;
