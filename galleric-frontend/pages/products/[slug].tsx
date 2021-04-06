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

    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);

    const found = await product_res.json();

    return {
        props: {
            product: found[0] //because the api response for filters is an array
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const products_res = await fetch(`${API_URL}/products/`);
    const products = await products_res.json();

    return {
        paths: products.map((product: IProduct) => ({
            params: { slug: String(product.slug) }
        })),
        fallback: false
    };
};
