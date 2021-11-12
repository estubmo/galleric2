import axios from 'axios';
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import InView, { useInView } from 'react-intersection-observer';

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
    const { wallpaper: { url: wallpaper_url = '' } = {} } = frontpageData || {};

    const variants = {
        visible: { opacity: 1 },
        hidden: {
            opacity: 0
        }
    };

    const [ref, inView, entry] = useInView({
        threshold: 0.5,
        triggerOnce: false
    });
    return (
        <PageWrapper className="bg-gray-900">
            <div className="flex flex-col w-full max-h-full">
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    className="relative flex items-center justify-center w-full h-screen overflow-hidden">
                    {wallpaper_url && (
                        <Image
                            src={wallpaper_url}
                            alt="Background image"
                            layout="fill"
                            objectFit="cover"
                        />
                    )}
                    <h1 className="text-3xl">
                        <strong>Some text here</strong>
                    </h1>
                </motion.div>
                <div style={{ height: 1500 }}></div>
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
