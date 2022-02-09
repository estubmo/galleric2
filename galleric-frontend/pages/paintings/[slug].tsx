import axios, { AxiosResponse } from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

import { PaintingCard } from '../../components/Product/PaintingCard';
import { IPainting } from '../../model/product';
import { API_URL } from '../../utils/urls';

interface IProps {
    painting: IPainting;
}

interface IParams extends ParsedUrlQuery {
    slug: string;
}

const Post = ({ painting }: IProps): JSX.Element => {
    return (
        <div className="flex justify-center min-h-screen">
            <PaintingCard painting={painting} />
        </div>
    );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams;

    const painting_res = await axios.get(`${API_URL}/paintings/?slug=${slug}`);
    const found = await painting_res.data;

    return {
        props: {
            painting: found[0] //because the api response for filters is an array
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const response: AxiosResponse = await axios.get(`${API_URL}/paintings/`);
    const { data = [] }: { data: [] } = response;

    return {
        paths: data.map((painting: IPainting) => ({
            params: { slug: String(painting.slug) }
        })),
        fallback: false
    };
};
