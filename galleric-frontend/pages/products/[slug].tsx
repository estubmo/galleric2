import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

import { ProductCard } from '../../components/Product/ProductCard';
import { IProduct } from '../../model/product';
import { API_URL } from '../../utils/urls';

interface IProps {
    product: IProduct;
}

interface IParams extends ParsedUrlQuery {
    slug: string;
}

const Post = ({ product }: IProps): JSX.Element => {
    return (
        <div className="flex justify-center min-h-screen">
            <ProductCard product={product} />
        </div>
    );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams;

    const product_res = await axios.get(`${API_URL}/products/?slug=${slug}`);
    const found = await product_res.data;

    return {
        props: {
            product: found[0] //because the api response for filters is an array
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get(`${API_URL}/products/`);
    const products = res.data;

    return {
        paths: products.map((product: IProduct) => ({
            params: { slug: String(product.slug) }
        })),
        fallback: false
    };
};
