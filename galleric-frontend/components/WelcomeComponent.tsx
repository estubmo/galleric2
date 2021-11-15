import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import {
    parentVariants,
    slideFromLeftVariants,
    slideFromRightVariants,
    slideUpTextVariants
} from '../constants/variants';

interface IWelcomeComponent {
    wallpaperUrl: string;
    sigUrl: string;
    stampUrl: string;
}

const WelcomeComponent = ({ wallpaperUrl, sigUrl, stampUrl }: IWelcomeComponent): JSX.Element => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [elementTop, setElementTop] = useState(0);
    const [elementHeight, setElementHeight] = useState(0);

    const { scrollY } = useViewportScroll();

    const initial = elementTop;
    const final = (elementTop + elementHeight) / 2;
    const yRange = useTransform(scrollY, [initial, final], [1, 0]);
    const ySpring = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => {
        const element = scrollRef.current;
        if (element) {
            setElementTop(
                element.getBoundingClientRect().top + window.scrollY || window.pageYOffset
            );
            setElementHeight(element.clientHeight);
        }
    }, [scrollRef]);

    return (
        <div className="fixed flex justify-center w-full h-screen max-h-screen overflow-hidden min-h-156">
            <motion.section
                ref={scrollRef}
                variants={parentVariants}
                initial="hidden"
                animate="visible"
                style={{ opacity: ySpring }}
                className="relative z-10 flex flex-col items-center justify-center h-full max-w-sm space-y-4 text-center bg-black md:max-w-screen-sm xl:max-w-screen-lg bg-opacity-20 md:space-y-10">
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
                    className="relative font-serif text-xl italic tracking-widest md:text-xl">
                    &quot;Abstract art has helped us to experience the{' '}
                    <motion.span
                        className="relative text-xl md:text-2xl"
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
                    className="pl-4 font-serif text-xl italic tracking-widest md:text-xl">
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
