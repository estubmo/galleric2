import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Parallax from '../components/Parallax';
import Scale from '../components/Scale';
import {
    slideFromLeftVariants,
    slideFromRightVariants,
    slideUpTextVariants
} from '../constants/variants';
import { ISlideComponent } from '../model/frontpage';

const parentVariants: Variants = {
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            delayChildren: 1,
            duration: 2
        }
    },
    hidden: {
        opacity: 0
    }
};

const MoroccoCollectionComponent = ({ collection }: ISlideComponent): JSX.Element => {
    const images = collection?.images;

    return (
        <motion.section
            variants={parentVariants}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col justify-center w-full py-20 overflow-hidden md:flex-row md:py-40">
            {/* MOBILE */}
            <div className="relative flex flex-col items-center w-full gap-10 md:hidden">
                <Parallax offset={50}>
                    <motion.div
                        className="relative object-cover w-56 h-56 bg-gray-100"
                        variants={parentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        style={{ y: 0, x: 0 }}>
                        {images[2] && (
                            <Image
                                alt="Morocco First Photo"
                                src={images[2].url}
                                layout="fill"
                                objectFit="cover"
                            />
                        )}
                    </motion.div>
                </Parallax>
                <Parallax offset={50}>
                    <motion.div
                        className="relative object-cover w-56 h-56 bg-gray-100"
                        variants={parentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        style={{ y: 0, x: 0 }}>
                        {images[0] && (
                            <Image
                                alt="Morocco Eye Photo"
                                src={images[0].url}
                                layout="fill"
                                objectFit="cover"
                            />
                        )}
                    </motion.div>
                </Parallax>
                <Parallax offset={50}>
                    <motion.div
                        className="relative object-cover w-56 h-56 bg-gray-100"
                        variants={parentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        style={{ y: 0, x: 0 }}>
                        {images[3] && (
                            <Image
                                alt="Morocco Last Photo"
                                src={images[3].url}
                                layout="fill"
                                objectFit="cover"
                            />
                        )}
                    </motion.div>
                </Parallax>
            </div>
            {/* DESKTOP */}
            <div className="max-w-screen-xl">
                <div className="relative flex-row justify-center hidden w-full gap-10 md:flex lg:gap-20">
                    <Parallax offset={-50}>
                        <motion.div
                            className="relative object-cover w-56 h-56 bg-gray-100"
                            variants={parentVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}>
                            {images[2] && (
                                <Image
                                    alt="Morocco First Photo"
                                    src={images[2].url}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            )}
                        </motion.div>
                    </Parallax>
                    <motion.div
                        className="relative object-cover w-56 h-56 bg-gray-100"
                        variants={parentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}>
                        {images[0] && (
                            <Image
                                alt="Morocco Eye Photo"
                                src={images[0].url}
                                layout="fill"
                                objectFit="cover"
                            />
                        )}
                    </motion.div>
                    <Parallax offset={50}>
                        <motion.div
                            className="relative object-cover w-56 h-56 bg-gray-100"
                            variants={parentVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}>
                            {images[3] && (
                                <Image
                                    alt="Morocco Last Photo"
                                    src={images[3].url}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            )}
                        </motion.div>
                    </Parallax>
                </div>
                <div className="relative">
                    <div className="flex justify-center w-full">
                        <motion.div
                            variants={parentVariants}
                            initial="hidden"
                            animate="visible"
                            className="absolute z-20 w-1/2 p-2 mb-44 md:mb-0 md:w-1/3 md:right-10 md:bottom-1/2 bottom-96 bg-morocco-brown bg-opacity-80">
                            <motion.h1
                                variants={slideFromRightVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 'some' }}
                                className="relative w-full font-serif text-xl italic tracking-widest">
                                &quot;Art has a voice -{' '}
                                <motion.span className="relative" variants={slideUpTextVariants}>
                                    let it speak
                                </motion.span>
                                &quot;
                            </motion.h1>
                            <motion.h1
                                variants={slideFromLeftVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 'some' }}
                                className="pl-4 font-serif text-xl italic tracking-widest text-right">
                                <strong>— Rochelle Carr</strong>
                            </motion.h1>
                        </motion.div>
                    </div>
                    <div className="flex justify-center mt-10 md:mt-20">
                        <Scale scaleOffset={0.4}>
                            <motion.div
                                className="relative object-cover w-70v h-70v md:w-96 md:h-96"
                                variants={parentVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}>
                                {images[2] && (
                                    <Image
                                        alt="Morocco Full Photo"
                                        src={images[4].url}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                )}
                            </motion.div>
                        </Scale>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default MoroccoCollectionComponent;
