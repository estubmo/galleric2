import axios from 'axios';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';

import { PageWrapper } from '../components/PageWrapper';
import { VerificationCodeInput } from '../components/VerificationCodeInput';
import { childrenVariants, errorMessageVariant } from '../utils/variants';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
//TODO: add helpers for error messages and fallbacks
//TODO: Handle token.invalid
const Verify: NextPage = () => {
    const [refreshInterval, setRefreshInterval] = useState<number>(5000);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [resent, setResent] = useState(false);
    const router = useRouter();
    const { code = '' } = router.query;

    const {
        data = {
            confirmed: false,
            email: ''
        }
    } = useSWR('/api/is-confirmed', fetcher, {
        refreshInterval: refreshInterval
    });

    useEffect(() => {
        if (data && data.confirmed) {
            setRefreshInterval(0);
            router.push('/');
        }
    }, [data, router]);

    const handleComplete = useCallback(
        async (val: string) => {
            setErrorMessage('');
            setIsLoading(true);
            try {
                await axios.post('/api/verify', {
                    email: data?.email,
                    confirmationToken: val
                });
                setSuccessMessage(`Successfully verified ${data?.email}! Redirecting...`);
            } catch (error) {
                setErrorMessage(error.response.data.message);
            } finally {
                setIsLoading(false);
            }
        },
        [data?.email]
    );

    const handleResendEmail = async () => {
        try {
            await axios.post('/api/send-email-confirmation');
            setSuccessMessage('Resent verification email!');
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <>
            <Head>
                <title>Svanhild Stub | Verify Email</title>
                <meta name="description" content="Verify Email" />
            </Head>
            <PageWrapper className="items-center justify-center">
                <div className="flex flex-col items-center px-4 text-xs h-60v sm:w-3/4 sm:text-base">
                    {data && data.email && (
                        <>
                            <motion.h2
                                className="text-4xl font-thin tracking-widest text-gray-400"
                                variants={childrenVariants}>
                                Verification
                            </motion.h2>
                            <motion.div variants={childrenVariants} className="mt-4">
                                We sent an email to{' '}
                                <span className="ml-1 font-mono text-yellow-400">
                                    {' '}
                                    {data.email}
                                </span>
                                ! Please check your inbox for a verification link. If you did not
                                receive an email, try to{' '}
                                <span
                                    className="text-gray-100 hover:underline focus-visible:underline focus:outline-none"
                                    role="button"
                                    tabIndex={0}
                                    onClick={handleResendEmail}
                                    onKeyPress={handleResendEmail}>
                                    resend email
                                </span>
                                .
                            </motion.div>
                        </>
                    )}
                    {data && (
                        <motion.div
                            variants={childrenVariants}
                            className="flex flex-col items-center mt-4">
                            <div className="mb-1">Or enter your verification code here:</div>
                            <VerificationCodeInput
                                value={code}
                                type="number"
                                fieldWidth={42}
                                fieldHeight={42}
                                isLoading={isLoading}
                                onComplete={handleComplete}
                            />
                        </motion.div>
                    )}
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
                    {resent && (
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            layout
                            variants={errorMessageVariant}
                            className="mt-4 text-gray-100">
                            Resent...
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

export default Verify;
