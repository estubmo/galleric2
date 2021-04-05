import axios from 'axios';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import useUser from '../lib/useUser';
import IUser from '../types/user';
import { childrenVariants, containerVariants, errorMessageVariant } from '../utils/variants';

const Account: NextPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [redirectTo, setRedirectTo] = useState<string>('/sign?sign=in');

    const { user, mutateUser } = useUser({
        redirectTo: redirectTo,
        redirectAs: '/signin',
        redirectIfFound: false
    });

    const handleClick = async () => {
        setIsLoading(true);
        try {
            setRedirectTo('/');

            await mutateUser(
                axios.post(
                    '/api/logout',
                    {},
                    {
                        withCredentials: true
                    }
                )
            );
            // const response = await logoutUser();
            // console.log('response', response);
            // if (response?.status === 200) {
            //     console.log('response?.status', response?.status);
            //     router.push('/');
            //     console.log('router.push');
            //     // mutateUser('/api/user', true);
            // }
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

            <motion.div key="accountComp" variants={containerVariants}>
                <div className="pt-14 h-screen bg-gray-900">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        className="flex flex-col items-center mt-12 p-24 w-full h-screen">
                        <motion.div className="flex flex-col items-start w-1/2 h-screen font-light tracking-widest">
                            <motion.h2
                                className="mt-4 text-gray-400 text-4xl font-thin"
                                variants={childrenVariants}>
                                Your Account
                            </motion.h2>
                            <motion.div className="mt-4" variants={childrenVariants}>
                                {user?.email}{' '}
                                {user && !user.confirmed && (
                                    <span className="ml-2 text-yellow-400">
                                        Please{' '}
                                        <Link href="/verify">
                                            <a>verify</a>
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
                </div>
            </motion.div>
        </>
    );
};

export default Account;
