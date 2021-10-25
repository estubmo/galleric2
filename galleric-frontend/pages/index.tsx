import axios from 'axios';
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';

import { PageWrapper } from '../components/PageWrapper';
import { API_URL } from '../utils/urls';

interface IFrontpageData {
    frontpageData: {
        top_sliding_image: {
            url: string;
        };
        bot_sliding_image: {
            url: string;
        };
        wallpaper: {
            url: string;
        };
    };
}

const IndexPage = ({ frontpageData }: IFrontpageData): JSX.Element => {
    const {
        top_sliding_image: { url: top_sliding_image_url = '' } = {},
        bot_sliding_image: { url: bot_sliding_image_url = '' } = {},
        wallpaper: { url: wallpaper_url = '' } = {}
    } = frontpageData || {};

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

    // TODO: Add images that scroll in
    // const [ref, inView, entry] = useInView({
    //     /* Optional options */
    //     threshold: 0.5,
    //     triggerOnce: false
    // });
    return (
        <PageWrapper className="bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex flex-col w-full">
                <motion.div
                    className="object-cover w-48 h-48 bg-gray-900 rounded mt-14"
                    style={{ y: y1Spring, x: 150 }}>
                    {top_sliding_image_url && (
                        <Image
                            alt="Top sliding image"
                            src={top_sliding_image_url}
                            layout="fill"
                            objectFit="cover"
                        />
                    )}
                </motion.div>
                <motion.div
                    className="object-cover w-48 h-48 bg-gray-900 rounded"
                    style={{ y: y2Spring, x: 50 }}>
                    {bot_sliding_image_url && (
                        <Image
                            alt="Bot sliding image"
                            src={bot_sliding_image_url}
                            layout="fill"
                            objectFit="cover"
                        />
                    )}
                </motion.div>
                <motion.div className="relative z-0 flex items-center justify-center w-full h-screen overflow-hidden bg-blue-300">
                    {wallpaper_url && (
                        <motion.img
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            className="absolute object-cover min-h-screen"
                            src={wallpaper_url}
                            style={{ scale: scaleSpring }}
                        />
                    )}
                </motion.div>
                <div style={{ height: 500 }} />
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
