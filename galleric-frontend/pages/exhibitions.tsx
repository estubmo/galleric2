import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

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
        <div className="flex flex-col bg-gray-900">
            <motion.div
                className="mt-14 w-48 h-48 bg-red-200 rounded"
                style={{ y: y1Spring, x: 150 }}
            />
            <motion.div className="w-48 h-48 bg-green-200 rounded" style={{ y: y2Spring, x: 50 }} />
            <motion.div className="relative flex items-center justify-center w-full h-screen bg-blue-300 overflow-hidden">
                <motion.img
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="absolute min-h-screen object-cover"
                    src="/images/wall_picture_203409_073436.png"
                    style={{ scale: scaleSpring }}
                />
            </motion.div>
            <div style={{ height: 500 }} />
            <div style={{ top: 0, left: 0 }}> {'is in view? ' + inView}</div>
            <motion.div className="mt-72 w-48 h-48 bg-green-200 rounded" />
            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 2, ease: 'easeOut' }}
                ref={ref}
                className="magic"
            />
        </div>
    );
};

export default Exhibitions;
