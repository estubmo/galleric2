import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/globals.css';

import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    useEffect(() => {
        // some browsers (like safari) may require a timeout to delay calling this
        // function after a page has loaded; otherwise, it may not update the position
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Head>
                <title>Svanhild Stub</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} layoutId={router.route} />
                </AnimatePresence>
            </Layout>
        </>
    );
}

export default MyApp;
