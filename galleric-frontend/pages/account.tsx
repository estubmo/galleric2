import axios from 'axios';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

import { PageWrapper } from '../components/PageWrapper';
import { useAsyncSetState } from '../lib/hooks';
import useUser from '../lib/useUser';
import { childrenVariants, containerVariants, errorMessageVariant } from '../utils/variants';

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
                <title>Galleric | Account</title>
                <meta name="description" content="The account page, view your orders"></meta>
            </Head>

            <PageWrapper>
                <motion.div className="flex flex-col items-start px-2 max-w-lg h-50v font-light tracking-widest md:w-1/2">
                    <motion.h2
                        className="mt-4 text-gray-400 text-4xl font-thin"
                        variants={childrenVariants}>
                        Your Account
                    </motion.h2>
                    <motion.div className="mt-4" variants={childrenVariants}>
                        {user?.email}{' '}
                        {user && !user.confirmed && !isLoading && (
                            <span className="ml-2 text-yellow-400">
                                Please{' '}
                                <Link href="/verify">
                                    <a className="text-blue-600 hover:underline focus-visible:underline focus:outline-none">
                                        verify
                                    </a>
                                </Link>{' '}
                                your email-address!
                            </span>
                        )}
                    </motion.div>

                    <motion.button
                        className="mt-4 px-4 py-2 text-gray-100 focus-visible:underline font-light tracking-wider bg-gray-800 border-b border-gray-400 focus:outline-none uppercase"
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
