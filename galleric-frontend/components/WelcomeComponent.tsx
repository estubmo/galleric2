import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

interface IWelcomeComponent {
    wallpaperUrl: string;
    sigUrl: string;
    stampUrl: string;
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

const slideUpTextVariants: Variants = {
    onscreen: { opacity: 1, top: 0, transition: { duration: 1 } },
    offscreen: { opacity: 0, top: 16 }
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

export default WelcomeComponent;
