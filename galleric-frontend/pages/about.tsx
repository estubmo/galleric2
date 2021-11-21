import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { PageWrapper } from '../components/PageWrapper';
import { childrenVariants, containerVariants } from '../utils/variants';

const About = (): JSX.Element => {
    return (
        <PageWrapper className="justify-center w-full h-screen max-w-screen-xl">
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="flex flex-col w-full p-4 mt-24">
                <motion.h1
                    className="text-4xl font-bold tracking-wider"
                    variants={childrenVariants}>
                    About Svanhild Stub
                </motion.h1>
                <motion.h2
                    className="italic font-light tracking-widest text-gray-200"
                    variants={childrenVariants}>
                    Why abstract art is more than just emotion
                </motion.h2>

                <div className="clear-none mt-4 leading-6 tracking-wider font-extralight">
                    <motion.div
                        variants={childrenVariants}
                        className="relative float-right mx-4 h-80 w-72">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="/images/svanhild.jpg"
                            alt="svanhild"
                        />
                    </motion.div>
                    <motion.p
                        className="mt-4 leading-6 tracking-wider font-extralight"
                        variants={childrenVariants}>
                        Norwegian artist <span className="italic font-bold">Svanhild Stub</span>{' '}
                        lives through her art. Hailing from the rugged island of{' '}
                        <span className="italic font-bold">Frøya </span> in northern Norway, where
                        the nature is raw and unforgiving, finding beauty wherever it presents
                        itself comes naturally to her. This is reflected in her art.
                    </motion.p>
                    <motion.p
                        className="mt-4 leading-6 tracking-wider font-extralight"
                        variants={childrenVariants}>
                        Currently a resident of Andalusia, Spain, there is no lack of inspiration in
                        the scenery. Svanhild regularly puts on paper anything that resonates with
                        her, be it abstract or concrete.
                    </motion.p>
                </div>
            </motion.div>
        </PageWrapper>
    );
};

export default About;
