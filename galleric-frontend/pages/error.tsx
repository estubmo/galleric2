import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

import { childrenVariants, containerVariants } from '../utils/variants';

export default function CustomError(): JSX.Element {
    return (
        <div className="bg-gray-900">
            <Head>
                <title>Galleric | Error</title>
                <meta name="description" content="Error" />
            </Head>

            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="flex flex-col items-center justify-center w-full h-screen">
                <div className="flex items-center">
                    <motion.h1 className="pr-4 mr-4 text-4xl font-thin" variants={childrenVariants}>
                        Error!
                    </motion.h1>
                    <motion.div
                        className="h-12 border-r border-gray-400"
                        variants={childrenVariants}></motion.div>
                    <motion.h2
                        className="pl-4 ml-4 text-2xl font-light tracking-widest"
                        variants={childrenVariants}>
                        An error has occurred - This is propbably not your fault.
                    </motion.h2>
                </div>
            </motion.div>
        </div>
    );
}
