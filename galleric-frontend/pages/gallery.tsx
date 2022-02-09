import axios from 'axios';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Modal from '../components/Modal';
import { PaintingCard } from '../components/Product/PaintingCard';
import Paintings from '../components/Product/Paintings';
import { IPainting, IPaintings } from '../model/product';
import { API_URL } from '../utils/urls';
import { childrenVariants, containerVariants } from '../utils/variants';

const Gallery = ({ paintings }: IPaintings): JSX.Element => {
    const router = useRouter();
    const [selectedPainting, setSelectedPainting] = useState<IPainting>(paintings[0]);
    useEffect(() => {
        if (router.query.painting && paintings && paintings.length > 0) {
            const painting = paintings.find((painting) => painting.slug === router.query.painting);
            if (painting) setSelectedPainting(painting);
        }
    }, [router.query.painting, paintings]);
    return (
        <>
            <AnimateSharedLayout>
                <div className="flex flex-col items-center w-full min-h-screen bg-gray-900">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        className="flex flex-col w-full p-14 max-w-screen-2xl">
                        <motion.div variants={childrenVariants}>
                            <Paintings paintings={paintings} />
                        </motion.div>
                    </motion.div>
                </div>
                <Modal showModal={!!router.query.painting} returnHref={router.pathname}>
                    <PaintingCard
                        painting={selectedPainting}
                        isModal
                        returnHref={router.pathname}
                    />
                </Modal>
            </AnimateSharedLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get(`${API_URL}/paintings/`);

    const paintings = res.data;
    return { props: { paintings }, revalidate: 60 };
};

export default Gallery;
