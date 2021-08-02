import axios from 'axios';
import { motion } from 'framer-motion';
import React from 'react';

import { PageWrapper } from '../components/PageWrapper';
import { API_URL } from '../utils/urls';

const SoldArt = ({ content }): JSX.Element => {
    console.log('content', content);
    return (
        <PageWrapper className="items-center justify-center">This page needs content</PageWrapper>
    );
};

export const getStaticProps = async ({ params, query }) => {
    const res = await axios.get(`${API_URL}/blogs/`);
    console.log('res', res);

    return { props: { content: res.data } };
};

export default SoldArt;
