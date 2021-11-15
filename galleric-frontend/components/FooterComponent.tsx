import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface IFooterComponent {
    wallpaperUrl: string;
}
const parentVariants: Variants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 2
        }
    },
    hidden: {
        opacity: 0
    }
};
const FooterComponent = ({ wallpaperUrl }: IFooterComponent): JSX.Element => {
    return (
        <div className="relative flex justify-center w-full h-screen max-h-screen overflow-hidden min-h-156">
            <motion.div
                variants={parentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                className="relative z-30 flex flex-col items-center justify-center w-full h-screen max-w-sm space-y-1 text-sm font-normal text-center bg-black md:max-w-screen-sm xl:max-w-screen-lg bg-opacity-20 md:space-y-4">
                <div>Svanhild Stub</div>
                <div>gallery@svanhildstub.com </div>
                <div>All paintings courtesy of the artist</div>
                <div>Site by Mo Web Dev © 2021</div>
            </motion.div>
            {wallpaperUrl && (
                <Image
                    src={wallpaperUrl}
                    className="select-none"
                    alt="Background image"
                    layout="fill"
                    objectFit="cover"
                />
            )}
        </div>
    );
};

export default FooterComponent;
