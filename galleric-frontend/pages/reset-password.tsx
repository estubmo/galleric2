import axios from 'axios';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { PageWrapper } from '../components/PageWrapper';
import { childrenVariants, errorMessageVariant } from '../utils/variants';

const ResetPassword: NextPage = () => {
    const router = useRouter();

    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isResetSuccessful, setIsResetSuccessful] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSendForgotPasswordEmail = async () => {
        setErrorMessage('');
        setIsSending(true);
        try {
            await axios.post('/api/reset-password', {
                code: router?.query?.code,
                password: password
            });
            setSuccessMessage(
                'Your password has been reset password! Logging you in and redirecting...'
            );
            setIsResetSuccessful(true);
            setTimeout(() => router.push('/'), 3000);
        } catch (error) {
            setErrorMessage(error.response.data.message);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <Head>
                <title>Galleric | Reset Password</title>
                <meta name="description" content="Reset Password" />
            </Head>
            <PageWrapper className="items-center justify-center">
                <motion.form
                    className="flex flex-col items-start max-w-lg px-2 font-light tracking-widest h-50v md:w-1/2"
                    onSubmit={handleSendForgotPasswordEmail}
                    key="signInUpForm">
                    <motion.h2
                        className="mt-4 text-4xl font-thin text-gray-400"
                        variants={childrenVariants}>
                        Reset Your Password?
                    </motion.h2>
                    <motion.div variants={childrenVariants} className="mt-4">
                        If you have a valid reset code, you may enter your new password here:
                    </motion.div>

                    <motion.input
                        variants={childrenVariants}
                        className="w-full py-2 mt-2 text-gray-200 placeholder-gray-600 bg-transparent border-0 border-b border-gray-400 autofill:text-fill-gray-200 autofill:shadow-fill-gray-900 focus:bg-transparent hover:border-gray-100 focus:border-gray-100 focus:outline-none"
                        id="password"
                        type="password"
                        autoComplete="new-password"
                        value={password}
                        disabled={isResetSuccessful}
                        onChange={(e) => {
                            setErrorMessage('');
                            setPassword(e.target.value);
                        }}
                        placeholder="New password"
                    />
                    <motion.button
                        className="px-4 py-2 mt-4 font-light tracking-wider text-gray-100 uppercase bg-gray-800 border-b border-gray-400 focus-visible:underline focus:outline-none"
                        whileHover={{ scale: isSending || isResetSuccessful ? 1 : 1.1 }}
                        disabled={isSending || isResetSuccessful}
                        variants={childrenVariants}
                        onClick={handleSendForgotPasswordEmail}
                        type="submit">
                        Change Password
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
                </motion.form>
            </PageWrapper>
        </>
    );
};

export default ResetPassword;
