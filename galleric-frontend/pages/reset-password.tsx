import axios from 'axios';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

import { PageWrapper } from '../components/PageWrapper';
import { childrenVariants, errorMessageVariant } from '../utils/variants';

const ForgotPassword: NextPage = () => {
    const [email, setEmail] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSendForgotPasswordEmail = async () => {
        try {
            setSent(true);
            await axios.post('/api/forgot-password', { email });
            setSuccessMessage('Sent password reset instructions!');
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <>
            <Head>
                <title>Galleric | Reset Password</title>
                <meta name="description" content="Verify Email" />
            </Head>
            <PageWrapper>
                <div className="flex flex-col items-center px-4 h-60v text-xs sm:w-3/4 sm:text-base">
                    <motion.div className="flex flex-col items-start px-2 max-w-lg h-50v font-light tracking-widest md:w-1/2">
                        <motion.h2
                            className="mt-4 text-gray-400 text-4xl font-thin"
                            variants={childrenVariants}>
                            Reset Password
                        </motion.h2>
                    </motion.div>

                    {isLoading && (
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            layout
                            variants={errorMessageVariant}
                            className="mt-4 text-gray-100">
                            Loading...
                        </motion.p>
                    )}
                    {sent && (
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            layout
                            variants={errorMessageVariant}
                            className="mt-4 text-gray-100">
                            Sent...
                        </motion.p>
                    )}
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
                    {successMessage && (
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            layout
                            variants={errorMessageVariant}
                            className="mt-4 text-yellow-400">
                            {successMessage}
                        </motion.p>
                    )}
                </div>
            </PageWrapper>
        </>
    );
};

export default ForgotPassword;
