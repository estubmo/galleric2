import axios from 'axios';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactCodeInput from 'react-verification-code-input';
import useSWR from 'swr';

import { PageWrapper } from '../components/PageWrapper';
import { errorMessageVariant } from '../utils/variants';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Verify: NextPage = () => {
    const [refreshInterval, setRefreshInterval] = useState<number>(5000);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const { data } = useSWR('/api/is-confirmed', fetcher, {
        refreshInterval: refreshInterval
    });

    // if (!data) router.push('/sign?sign=in', '/signin');

    useEffect(() => {
        if (data && data.confirmed) {
            setRefreshInterval(0);
            Router.push('/');
        }
    }, [data]);
    const handleChange = () => {
        setErrorMessage('');
    };
    const handleComplete = async (val: string) => {
        console.log('val', val);
        try {
            const response = await axios.post('/api/verify/', {
                email: data?.email,
                confirmationToken: val
            });
            console.log('response.data', response.data);
            setSuccessMessage(`Successfully verified ${data?.email}!`);
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    };
    //TODO: Here, revalidate user and see if it is confirmed.
    //If it is, change text to "Email verified. Redirecting...
    // and redirect to '/'
    return (
        <>
            <Head>
                <title>Galleric | Verify Email</title>
                <meta name="description" content="Verify Email" />
            </Head>
            <PageWrapper>
                <div className="flex flex-col items-center justify-center">
                    {data && data.email && !data.confirmed && (
                        <div>
                            We sent an email to{' '}
                            <span className="ml-1 text-yellow-400 font-mono"> {data.email}</span>!
                            Please check your email for a verification link.
                        </div>
                    )}
                    {data && (
                        <div className="mt-2">
                            <div>Or enter your verification code here:</div>
                            <ReactCodeInput
                                className="bg-grey-900 text-grey-100 border-gray-100"
                                type="number"
                                fieldWidth={46}
                                fieldHeight={46}
                                onChange={() => handleChange()}
                                onComplete={(val) => handleComplete(val)}
                            />
                        </div>
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
