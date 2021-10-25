import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/globals.css';

import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';
import SmoothScroll from '../components/SmoothScroll';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    return (
        // <CartProvider
        //     mode="client-only"
        //     successUrl="/"
        //     cancelUrl="/"
        //     stripe={getStripe()}
        //     currency={config.CURRENCY}>
        <>
            <Head>
                <title>Galleric</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <SmoothScroll>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route} layoutId={router.route} />
                    </AnimatePresence>
                </SmoothScroll>
            </Layout>
        </>
        // </CartProvider>
    );
}

export default MyApp;
