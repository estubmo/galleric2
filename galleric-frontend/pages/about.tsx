import { motion } from 'framer-motion';
import React from 'react';

import { PageWrapper } from '../components/PageWrapper';
import { childrenVariants, containerVariants } from '../utils/variants';

const About = (): JSX.Element => {
    return (
        <PageWrapper>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="flex flex-col w-full max-w-screen-xl p-4 m-14">
                <motion.h1
                    className="text-4xl font-bold tracking-wider"
                    variants={childrenVariants}>
                    About Svanhild Stub
                </motion.h1>
                <motion.h2
                    className="italic font-light tracking-widest text-gray-200"
                    variants={childrenVariants}>
                    Why abstract art is more than just emotion
                </motion.h2>

                <motion.p
                    className="clear-none mt-4 leading-6 tracking-wider font-extralight"
                    variants={childrenVariants}>
                    <motion.img
                        variants={childrenVariants}
                        className="float-right object-cover mx-4 h-82 w-72"
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
                    elit. Quam minus delectus excepturi numquam Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quam minus delectus excepturi numquam atque
                    officia porro quas vitae? Dolorem pariatur enim fugiat similique assumenda ex
                    quae quas et neque harum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam minus delectus excepturi numquam atque officia porro quas vitae?
                    Dolorem pariatur enim fugiat similique assumenda ex quae quas et neque harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus delectus
                    excepturi numquam atque officia porro quas vitae? Dolorem pariatur enim fugiat
                    similique assumenda ex quae quas et neque harum. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quam minus delectus excepturi numquam atque
                    officia porro quas vitae? Dolorem pariatur{' '}
                    <span className="italic font-bold">enim fugiat similique </span>assumenda ex
                    quae quas et neque harum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam minus delectus excepturi numquam
                </motion.p>
                <motion.p
                    className="mt-4 leading-6 tracking-wider font-extralight"
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
                    className="mt-4 leading-6 tracking-wider font-extralight"
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
                    className="mt-4 leading-6 tracking-wider font-extralight"
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
        </PageWrapper>
    );
};

export default About;
