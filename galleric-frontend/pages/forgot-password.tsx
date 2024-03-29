import axios from 'axios';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { PageWrapper } from '../components/PageWrapper';
import { childrenVariants, errorMessageVariant } from '../utils/variants';

const ForgotPassword: NextPage = () => {
    const router = useRouter();

    const [email, setEmail] = useState<string[] | string>(router?.query?.email || '');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isSentSuccessful, setIsSentSuccessful] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSendForgotPasswordEmail = async () => {
        setErrorMessage('');
        setIsSending(true);
        try {
            await axios.post('/api/forgot-password', { email });
            setSuccessMessage('Sent password reset instructions!');
            setIsSentSuccessful(true);
        } catch (error) {
            setErrorMessage(error.response.data.message);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <Head>
                <title>Svanhild Stub | Forgot Password</title>
                <meta name="description" content="Reset Password" />
            </Head>
            <PageWrapper className="items-center justify-center">
                <motion.div className="flex flex-col items-start max-w-lg px-2 font-light tracking-widest h-50v md:w-1/2">
                    <motion.h2
                        className="mt-4 text-4xl font-thin text-gray-400"
                        variants={childrenVariants}>
                        Forgotten Your Password?
                    </motion.h2>
                    <motion.div variants={childrenVariants} className="mt-4">
                        No worries! Enter your email and we will send you the reset instructions.
                    </motion.div>
                    <motion.label
                        variants={childrenVariants}
                        className="mt-4 text-sm uppercase"
                        htmlFor="email">
                        Email address
                    </motion.label>
                    <motion.input
                        variants={childrenVariants}
                        className="w-full py-2 text-gray-200 placeholder-gray-600 bg-transparent border-0 border-b border-gray-400 autofill:text-fill-gray-200 autofill:shadow-fill-gray-900 focus:bg-transparent hover:border-gray-100 focus:border-gray-100 focus:outline-none"
                        id="email"
                        type="email"
                        value={email}
                        disabled={isSentSuccessful}
                        onChange={(e) => {
                            setErrorMessage('');
                            setEmail(e.target.value);
                        }}
                        placeholder="Your email address goes here"
                    />
                    <motion.button
                        className="px-4 py-2 mt-4 font-light tracking-wider text-gray-100 uppercase bg-gray-800 border-b border-gray-400 focus-visible:underline focus:outline-none"
                        whileHover={{ scale: isSending || isSentSuccessful ? 1 : 1.1 }}
                        disabled={isSending || isSentSuccessful}
                        variants={childrenVariants}
                        onKeyPress={handleSendForgotPasswordEmail}
                        onClick={handleSendForgotPasswordEmail}>
                        Send email instructions
                    </motion.button>

                    {isSending && (
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            layout
                            variants={errorMessageVariant}
                            className="mt-4 text-gray-100">
                            Sending...
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
                </motion.div>
            </PageWrapper>
        </>
    );
};

export default ForgotPassword;
