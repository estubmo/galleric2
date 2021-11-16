import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

import { childrenVariants, containerVariants } from '../utils/variants';

export default function Custom404(): JSX.Element {
    return (
        <div className="bg-gray-900">
            <Head>
                <title>Svanhild Stub | 404</title>
                <meta name="description" content="404 - Page Not Found" />
            </Head>

            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="flex flex-col items-center justify-center w-full h-screen">
                <div className="flex items-center">
                    <motion.h1 className="mr-4 pr-4 text-4xl font-thin" variants={childrenVariants}>
                        404
                    </motion.h1>
                    <motion.div
                        className="h-12 border-r border-gray-400"
                        variants={childrenVariants}></motion.div>
                    <motion.h2
                        className="ml-4 pl-4 text-2xl font-light tracking-widest"
                        variants={childrenVariants}>
                        This page could not be found
                    </motion.h2>
                </div>
            </motion.div>
        </div>
    );
}
