import axios from 'axios';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { PageWrapper } from '../components/PageWrapper';
import { API_URL, fromImageToUrl } from '../utils/urls';
import { childrenVariants, containerVariants } from '../utils/variants';

interface IAboutData {
    aboutData: {
        portrait: {
            url: string;
        };
        title: string;
        subtitle: string;
        content: string;
    };
}

const About = ({ aboutData }: IAboutData): JSX.Element => {
    const { title, subtitle, portrait, content } = aboutData;
    const paragraphs = content.split('\n');

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
                    {title}
                </motion.h1>
                <motion.h2
                    className="italic font-light tracking-widest text-gray-200"
                    variants={childrenVariants}>
                    {subtitle}
                </motion.h2>

                <div className="clear-none mt-4 leading-6 tracking-wider font-extralight">
                    <motion.div
                        variants={childrenVariants}
                        className="relative float-right mx-4 h-80 w-72">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={fromImageToUrl(portrait)}
                            alt="portrait"
                        />
                    </motion.div>
                    {paragraphs.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            className="mt-4 leading-6 tracking-wider font-extralight"
                            variants={childrenVariants}>
                            <ReactMarkdown>{paragraph}</ReactMarkdown>
                        </motion.p>
                    ))}
                </div>
            </motion.div>
        </PageWrapper>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get(`${API_URL}/about/`);
    const aboutData = res.data;

    return { props: { aboutData } };
};

export default About;
