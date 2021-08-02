import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { PageWrapper } from '../components/PageWrapper';

const Exhibitions = (): JSX.Element => {
    const { scrollY, scrollYProgress } = useViewportScroll();

    const y1 = useTransform(scrollY, [0, 300], [0, 800]);
    const y2 = useTransform(scrollY, [0, 300], [0, -400]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
    const physics = { damping: 100, mass: 0.27, stiffness: 800 }; // easing of smooth scroll
    const y1Spring = useSpring(y1, physics); // apply easing to the negative scroll value
    const y2Spring = useSpring(y2, physics); // apply easing to the negative scroll value
    const scaleSpring = useSpring(scale, physics); // apply easing to the negative scroll value
    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50
        }
    };
    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false
    });
    return (
        <PageWrapper>
            <div className="flex flex-col w-full bg-gray-900">
                <motion.div
                    className="object-cover w-48 h-48 bg-red-200 rounded mt-14"
                    style={{ y: y1Spring, x: 150 }}>
                    <Image src="/images/20201010_112636.jpg" layout="fill" objectFit="none" />
                </motion.div>
                <motion.div
                    className="object-cover w-48 h-48 bg-green-200 rounded"
                    style={{ y: y2Spring, x: 50 }}>
                    <Image src="/images/20201010_112712.jpg" layout="fill" objectFit="none" />
                </motion.div>
                <motion.div className="relative z-0 flex items-center justify-center w-full h-screen overflow-hidden bg-blue-300">
                    <motion.img
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        className="absolute object-cover min-h-screen"
                        src="/images/wall_picture_203409_073436.png"
                        style={{ scale: scaleSpring }}
                    />
                </motion.div>
                <div style={{ height: 500 }} />
            </div>
        </PageWrapper>
    );
};

export default Exhibitions;
