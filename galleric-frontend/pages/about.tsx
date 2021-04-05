import { motion } from 'framer-motion';
import React from 'react';

import { childrenVariants, containerVariants } from '../utils/variants';

const About = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center w-full h-auto bg-gray-900">
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="flex flex-col m-14 p-4 w-full max-w-screen-xl">
                <motion.h1
                    className="text-4xl font-bold tracking-wider"
                    variants={childrenVariants}>
                    About Svanhild Stub
                </motion.h1>
                <motion.h2
                    className="text-gray-200 italic font-light tracking-widest"
                    variants={childrenVariants}>
                    Why abstract art is more than just emotion
                </motion.h2>

                <motion.p
                    className="clear-none mt-4 font-extralight tracking-wider leading-6"
                    variants={childrenVariants}>
                    <motion.img
                        variants={childrenVariants}
                        className="h-82 float-right mx-4 w-72 object-cover"
                        src="/images/svanhild.jpg"
                        alt="svanhild"
                    />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus delectus
                    excepturi numquam atque officia porro quas vitae? Dolorem pariatur enim fugiat
                    similique assumenda ex quae quas et neque harum. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quam minus delectus excepturi numquam atque
                    officia porro quas vitae? Dolorem pariatur enim fugiat similique assumenda ex
                    quae quas et neque harum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam minus delectus excepturi numquam atque officia porro quas vitae?
                    Dolorem pariatur enim fugiat similique assumenda ex quae quas et neque harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus delectus
                    excepturi numquam atque officia porro quas vitae? Dolorem pariatur{' '}
                    <span className="italic font-bold">enim fugiat similique </span>assumenda ex
                    quae quas et neque harum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam minus delectus excepturi numquam
                </motion.p>
                <motion.p
                    className="mt-4 font-extralight tracking-wider leading-6"
                    variants={childrenVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus delectus
                    excepturi numquam atque officia porro quas vitae? Dolorem pariatur enim fugiat
                    similique assumenda ex quae quas et neque harum. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quam minus delectus excepturi numquam atque
                    officia porro quas vitae? Dolorem pariatur enim fugiat similique assumenda ex
                    quae quas et neque harum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam minus delectus excepturi numquam atque officia porro quas vitae?
                    Dolorem pariatur enim fugiat similique assumenda ex quae quas et neque harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus delectus
                    excepturi numquam atque officia porro quas vitae? Dolorem pariatur{' '}
                    <span className="italic font-bold">enim fugiat similique </span>assumenda ex
                    quae quas et neque harum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam minus delectus excepturi numquam
                </motion.p>
                <motion.p
                    className="mt-4 font-extralight tracking-wider leading-6"
                    variants={childrenVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus delectus
                    excepturi numquam atque officia porro quas vitae? Dolorem pariatur enim fugiat
                    similique assumenda ex quae quas et neque harum. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quam minus delectus excepturi numquam atque
                    officia porro quas vitae? Dolorem pariatur enim fugiat similique assumenda ex
                    quae quas et neque harum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam minus delectus excepturi numquam atque officia porro quas vitae?
                    Dolorem pariatur enim fugiat similique assumenda ex quae quas et neque harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus delectus
                    excepturi numquam atque officia porro quas vitae? Dolorem pariatur{' '}
                    <span className="italic font-bold">enim fugiat similique </span>assumenda ex
                    quae quas et neque harum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam minus delectus excepturi numquam
                </motion.p>
                <motion.p
                    className="mt-4 font-extralight tracking-wider leading-6"
                    variants={childrenVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus delectus
                    excepturi numquam atque officia porro quas vitae? Dolorem pariatur enim fugiat
                    similique assumenda ex quae quas et neque harum. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quam minus delectus excepturi numquam atque
                    officia porro quas vitae? Dolorem pariatur enim fugiat similique assumenda ex
                    quae quas et neque harum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam minus delectus excepturi numquam atque officia porro quas vitae?
                    Dolorem pariatur enim fugiat similique assumenda ex quae quas et neque harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus delectus
                    excepturi numquam atque officia porro quas vitae? Dolorem pariatur{' '}
                    <span className="italic font-bold">enim fugiat similique </span>assumenda ex
                    quae quas et neque harum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam minus delectus excepturi numquam
                </motion.p>
            </motion.div>
        </div>
    );
};

export default About;
