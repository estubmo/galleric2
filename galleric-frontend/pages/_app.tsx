import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/globals.css';

import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Cart from '../components/Cart';
import CartSummary from '../components/CartSummary';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Svanhild Stub</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <AnimatePresence exitBeforeEnter>
                    <Cart>
                        <Component {...pageProps} key={router.route} layoutId={router.route} />
                    </Cart>
                </AnimatePresence>
            </Layout>
        </>
    );
}

export default MyApp;
