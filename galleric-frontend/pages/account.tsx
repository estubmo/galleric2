import axios from 'axios';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

import { PageWrapper } from '../components/PageWrapper';
import { useAsyncSetState } from '../lib/hooks';
import useUser from '../lib/useUser';
import { childrenVariants, errorMessageVariant } from '../utils/variants';

const Account: NextPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [redirectTo, setRedirectTo] = useAsyncSetState<string>('/sign?sign=in');
    const [redirectAs, setRedirectAs] = useAsyncSetState<string | undefined>('/signin');

    const { user, mutateUser } = useUser({
        redirectTo: redirectTo,
        redirectAs: redirectAs,
        redirectIfFound: false
    });

    const handleClick = async () => {
        setIsLoading(true);
        try {
            setRedirectTo('/');
            setRedirectAs('/');

            await mutateUser(
                axios.post(
                    '/api/logout',
                    {},
                    {
                        withCredentials: true
                    }
                )
            );
        } catch (error) {
            setErrorMessage(error.reponse.data.message);
        } finally {
            setIsLoading(false);
        }
    };
    //TODO: Password change
    //TODO: View Orders

    return (
        <>
            <Head>
                <title>Svanhild Stub | Account</title>
                <meta name="description" content="The account page, view your orders"></meta>
            </Head>

            <PageWrapper className="items-center justify-center">
                <motion.div className="flex flex-col items-start max-w-lg px-2 font-light tracking-widest h-50v md:w-1/2">
                    <motion.h2
                        className="mt-4 text-4xl font-thin text-gray-400"
                        variants={childrenVariants}>
                        Your Account
                    </motion.h2>
                    <motion.div className="mt-4" variants={childrenVariants}>
                        {user?.email}{' '}
                        {user && !user.confirmed && !isLoading && (
                            <span className="ml-2 text-yellow-400">
                                Please{' '}
                                <Link href="/verify">
                                    <a className="text-blue-900 hover:underline focus-visible:underline focus:outline-none">
                                        verify
                                    </a>
                                </Link>{' '}
                                your email-address!
                            </span>
                        )}
                    </motion.div>

                    <motion.button
                        className="px-4 py-2 mt-4 font-light tracking-wider text-gray-100 uppercase bg-gray-800 border-b border-gray-400 focus-visible:underline focus:outline-none"
                        whileHover={{ scale: 1.1 }}
                        variants={childrenVariants}
                        onClick={handleClick}>
                        Logout
                    </motion.button>
                    {isLoading && <span>Loading...</span>}
                </motion.div>
                {errorMessage && (
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        layout
                        variants={errorMessageVariant}
                        className="mt-4 text-red-400">
                        {errorMessage}
                    </motion.p>
                )}
            </PageWrapper>
        </>
    );
};

export default Account;
