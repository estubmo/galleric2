import { motion, Variants } from 'framer-motion';
import Image from 'next/future/image';
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
                className="relative z-30 flex flex-col items-center justify-center w-full h-screen space-y-1 text-sm font-normal text-center bg-black bg-opacity-20 md:space-y-4">
                <div>Svanhild Stub</div>
                <div>
                    <a className="hover:underline" href="mailto:gallery@svanhildstub.com">
                        gallery@svanhildstub.com
                    </a>
                </div>
                <div>All paintings courtesy of the artist</div>
                <div>
                    Site by{' '}
                    <a className="hover:underline" href="mailto:eirik@mowebdev.com">
                        Mo Web Dev
                    </a>{' '}
                    © 2022
                </div>
            </motion.div>
            {wallpaperUrl && <Image src={wallpaperUrl} alt="Background image" sizes="100vw" fill />}
        </div>
    );
};

export default FooterComponent;
