import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Parallax from '../components/Parallax';
import Scale from '../components/Scale';
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
            className="relative w-full py-20 overflow-hidden bg-gradient-to-b to-gray-300 from-yellow-200 md:py-40">
            <div className="relative flex flex-col items-center gap-10 md:hidden">
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
                                alt="Morocco First Photo"
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
                        {images[1] && (
                            <Image
                                alt="Morocco Eye Photo"
                                src={images[1].url}
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
            <div className="relative flex-row justify-center hidden gap-10 md:flex lg:gap-20">
                <Parallax offset={-50}>
                    <motion.div
                        className="relative object-cover w-56 h-56 bg-gray-100"
                        variants={parentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}>
                        {images[0] && (
                            <Image
                                alt="Morocco First Photo"
                                src={images[0].url}
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
                    {images[1] && (
                        <Image
                            alt="Morocco Eye Photo"
                            src={images[1].url}
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
        </motion.section>
    );
};

export default MoroccoCollectionComponent;
