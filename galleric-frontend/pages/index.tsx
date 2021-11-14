import axios from 'axios';
import { motion, Variants } from 'framer-motion';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React, { useRef } from 'react';

import { PageWrapper } from '../components/PageWrapper';
import Parallax from '../components/Parallax';
import Scale from '../components/Scale';
import { API_URL } from '../utils/urls';

interface IFrontpageData {
    frontpageData: {
        wallpaper: {
            url: string;
        };
        sig: {
            url: string;
        };
        stamp: {
            url: string;
        };
        collections: [
            {
                id: number;
                title: string;
                images: Array<IImage>;
            }
        ];
    };
}
interface IImage {
    url: string;
}
interface IWelcomeComponent {
    wallpaperUrl: string;
    sigUrl: string;
    stampUrl: string;
}
interface IFooterComponent {
    wallpaperUrl: string;
}
interface ISlideComponent {
    collection: {
        id: number;
        title: string;
        images: Array<IImage>;
    };
}

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

const slideFromLeftVariants: Variants = {
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            delayChildren: 1.5
        }
    },
    offscreen: {
        opacity: 0,
        x: '-50%'
    }
};
const slideFromRightVariants: Variants = {
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            delayChildren: 1.5
        }
    },
    offscreen: {
        opacity: 0,
        x: '50%'
    }
};
const slideFromTopVariants: Variants = {
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            delayChildren: 1.5
        }
    },
    offscreen: {
        opacity: 0,
        y: '-50%'
    }
};
const slideFromBotVariants: Variants = {
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            delayChildren: 1.5
        }
    },
    offscreen: {
        opacity: 0,
        y: '50%'
    }
};

const slideUpTextVariants: Variants = {
    onscreen: { opacity: 1, top: 0, transition: { duration: 1 } },
    offscreen: { opacity: 0, top: 16 }
};

const FooterComponent = ({ wallpaperUrl }: IFooterComponent): JSX.Element => {
    return (
        <div className="relative flex justify-center w-full h-screen max-h-screen overflow-hidden min-h-156">
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
const WelcomeComponent = ({ wallpaperUrl, sigUrl, stampUrl }: IWelcomeComponent): JSX.Element => {
    const scrollRef = useRef(null);

    return (
        <div className="relative flex justify-center w-full h-screen max-h-screen overflow-hidden min-h-156">
            <motion.section
                ref={scrollRef}
                variants={parentVariants}
                initial="hidden"
                animate="visible"
                className="relative z-50 flex flex-col items-center justify-center h-full max-w-sm space-y-4 text-center bg-black md:max-w-screen-sm xl:max-w-screen-lg bg-opacity-20 md:space-y-10">
                <motion.div
                    variants={parentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 'some', root: scrollRef }}
                    className="relative flex justify-center">
                    {stampUrl && (
                        <Image
                            src={stampUrl}
                            className="select-none opacity-80 filter invert"
                            alt="Stamp"
                            width={200}
                            height={200}
                        />
                    )}
                </motion.div>
                <motion.div
                    variants={slideFromLeftVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 'some', root: scrollRef }}
                    className="relative flex justify-center mb-10">
                    {sigUrl && (
                        <Image
                            src={sigUrl}
                            className="select-none opacity-80 filter invert"
                            alt="Stub signature"
                            width={200}
                            height={100}
                        />
                    )}
                </motion.div>

                <motion.h1
                    variants={slideFromRightVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 'some', root: scrollRef }}
                    className="relative font-serif text-xl italic tracking-widest md:text-3xl">
                    &quot;Abstract art has helped us to experience the{' '}
                    <motion.span
                        className="relative text-2xl md:text-4xl"
                        variants={slideUpTextVariants}>
                        emotional power
                    </motion.span>{' '}
                    inherent in pure form&quot;
                </motion.h1>
                <motion.h1
                    variants={slideFromLeftVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 'some', root: scrollRef }}
                    className="pl-4 font-serif text-xl italic tracking-widest md:text-3xl">
                    <strong>— Anton Ehrenzweig</strong>
                </motion.h1>
            </motion.section>
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

const MonochromeCollectionComponent = ({ collection }: ISlideComponent): JSX.Element => {
    const images = collection?.images;

    return (
        <motion.section
            variants={parentVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-gray-300 to-gray-400 md:py-40">
            <div className="relative flex flex-col items-center gap-10 md:hidden">
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
                                alt="Monochrome First Photo"
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
                        {images[1] && (
                            <Image
                                alt="Monochrome Eye Photo"
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
                                alt="Monochrome Last Photo"
                                src={images[3].url}
                                layout="fill"
                                objectFit="cover"
                            />
                        )}
                    </motion.div>
                </Parallax>
            </div>
            <div className="relative flex-row justify-center hidden gap-10 md:flex lg:gap-20">
                <Parallax offset={50}>
                    <motion.div
                        className="relative object-cover w-56 h-56 bg-gray-100"
                        variants={parentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}>
                        {images[2] && (
                            <Image
                                alt="Monochrome First Photo"
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
                    {images[1] && (
                        <Image
                            alt="Monochrome Eye Photo"
                            src={images[1].url}
                            layout="fill"
                            objectFit="cover"
                        />
                    )}
                </motion.div>
                <Parallax offset={-50}>
                    <motion.div
                        className="relative object-cover w-56 h-56 bg-gray-100"
                        variants={parentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}>
                        {images[3] && (
                            <Image
                                alt="Monochrome Last Photo"
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
                                alt="Monochrome Full Photo"
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

const IndexPage = ({ frontpageData }: IFrontpageData): JSX.Element => {
    const moroccoCollection = frontpageData.collections.find((c) => c.title === 'morocco');
    const monochromeCollection = frontpageData.collections.find((c) => c.title === 'monochrome');

    return (
        <PageWrapper>
            <div className="flex flex-col w-full max-h-full">
                <WelcomeComponent
                    wallpaperUrl={frontpageData.wallpaper.url}
                    sigUrl={frontpageData.sig.url}
                    stampUrl={frontpageData.stamp.url}
                />
                {moroccoCollection && <MoroccoCollectionComponent collection={moroccoCollection} />}
                {monochromeCollection && (
                    <MonochromeCollectionComponent collection={monochromeCollection} />
                )}
                {monochromeCollection && (
                    <FooterComponent wallpaperUrl={monochromeCollection?.images[1]?.url} />
                )}
            </div>
        </PageWrapper>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get(`${API_URL}/frontpage/`);
    const frontpageData = res.data;

    return { props: { frontpageData } };
};

export default IndexPage;
