import axios from 'axios';
import clsx from 'clsx';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useAsyncSetState } from '../../lib/hooks';
import useUser from '../../lib/useUser';
import { childrenVariants, errorMessageVariant } from '../../utils/variants';
import { PageWrapper } from '../PageWrapper';

interface SignUpSignInProps {
    sign: string | string[];
}

export const SignUpSignIn = ({ sign }: SignUpSignInProps): JSX.Element => {
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [redirectTo, setRedirectTo] = useAsyncSetState<string>('/account');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [redirectAs, setRedirectAs] = useAsyncSetState<string | undefined>(undefined);

    const { mutateUser } = useUser({
        redirectTo: redirectTo,
        redirectIfFound: true,
        redirectAs: redirectAs
    });

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setErrorMessage('');
    }, [email, sign]);

    const setRedirectToAsync = async (path: string) => {
        return await setRedirectTo(path);
    };

    const handleSignIn = async () => {
        router.prefetch('/');
        try {
            await setRedirectToAsync('/');
            await mutateUser(
                axios.post(
                    '/api/login',
                    {
                        identifier: email,
                        password: password
                    },
                    {
                        withCredentials: true
                    }
                )
            );
        } catch (error) {
            setErrorMessage(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignUp = async () => {
        router.prefetch(`/verify`, '/signup');
        //TODO: Validate email
        //TODO: Validate password
        try {
            await setRedirectToAsync(`/verify`);

            await mutateUser(
                axios.post('/api/register', {
                    identifier: email,
                    password: password
                })
            );
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.response.data.message);
            setIsLoading(false);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (isLoading) return;
        setErrorMessage('');
        setIsLoading(true);

        if (sign === 'in') {
            await handleSignIn();
        }

        if (sign === 'up') {
            await handleSignUp();
        }
    };

    return (
        <>
            <Head>
                <title>Galleric | Sign {sign}</title>
                <meta name="description" content={`Sign ${sign}`} />
            </Head>
            <PageWrapper className="items-center justify-center">
                <AnimateSharedLayout type="crossfade">
                    <AnimatePresence exitBeforeEnter>
                        <motion.form
                            className="flex flex-col items-start max-w-lg font-light tracking-widest h-50v md:w-2/3"
                            onSubmit={handleSubmit}
                            key="signInUpForm">
                            <motion.h2
                                variants={childrenVariants}
                                className="flex text-4xl text-gray-400">
                                <Link href="/sign?sign=in" as="/signin" passHref>
                                    <div className="font-thin tracking-widest cursor-pointer focus-visible:underline focus:outline-none">
                                        <a>
                                            <motion.div
                                                className={clsx('', {
                                                    'text-gray-100': sign === 'in'
                                                })}>
                                                Sign In
                                            </motion.div>
                                        </a>
                                        {sign === 'in' && (
                                            <motion.div
                                                layoutId="signTitle"
                                                className="w-full bg-white rounded-xl"
                                                style={{
                                                    height: 1,
                                                    willChange: 'transform'
                                                }}
                                            />
                                        )}
                                    </div>
                                </Link>
                                <div className="mx-4 font-thin tracking-widest">or</div>
                                <Link href="/sign?sign=up" as="/signup" passHref>
                                    <div className="font-thin tracking-widest cursor-pointer focus-visible:underline focus:outline-none">
                                        <a>
                                            <motion.div
                                                className={clsx('', {
                                                    'text-gray-100': sign === 'up'
                                                })}>
                                                Sign Up
                                            </motion.div>
                                        </a>
                                        {sign === 'up' && (
                                            <motion.div
                                                layoutId="signTitle"
                                                className="w-full bg-white rounded-xl"
                                                style={{
                                                    height: 1,
                                                    willChange: 'transform'
                                                }}
                                            />
                                        )}
                                    </div>
                                </Link>
                            </motion.h2>

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
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="username"
                                placeholder="Your email address goes here"
                            />
                            <motion.label
                                variants={childrenVariants}
                                className="mt-4 text-sm uppercase"
                                htmlFor="email">
                                Password
                            </motion.label>
                            <motion.input
                                variants={childrenVariants}
                                className="w-full py-2 text-gray-200 placeholder-gray-600 bg-transparent border-0 border-b border-gray-400 autofill:text-fill-gray-200 autofill:shadow-fill-gray-900 focus:bg-transparent hover:border-gray-100 focus:border-gray-100 focus:outline-none"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                placeholder="Password"
                            />
                            <div className="flex items-center justify-between w-full">
                                <motion.button
                                    variants={childrenVariants}
                                    className="py-2 pl-4 pr-10 mt-4 font-light tracking-wider text-gray-100 uppercase bg-gray-800 border-b border-gray-400 focus-visible:underline focus:outline-none disabled:opacity-50 disabled:cursor-wait"
                                    whileHover={{ scale: isLoading ? 1 : 1.1 }}
                                    disabled={isLoading}
                                    type="submit">
                                    Sign
                                    <AnimatePresence>
                                        {sign === 'in' && (
                                            <motion.span
                                                key="signInText"
                                                className="absolute ml-1"
                                                initial={{ y: '-20px', opacity: 0 }}
                                                animate={{
                                                    y: 0,
                                                    opacity: 1,
                                                    transition: { duration: 0.3 }
                                                }}
                                                exit={{
                                                    y: '-20px',
                                                    opacity: 0,
                                                    transition: { duration: 0.3 }
                                                }}>
                                                {sign}
                                            </motion.span>
                                        )}
                                        {sign === 'up' && (
                                            <motion.span
                                                key="signUpText"
                                                className="absolute ml-1"
                                                initial={{ y: '20px', opacity: 0 }}
                                                animate={{
                                                    y: 0,
                                                    opacity: 1,
                                                    transition: { duration: 0.3 }
                                                }}
                                                exit={{
                                                    y: '20px',
                                                    opacity: 0,
                                                    transition: { duration: 0.3 }
                                                }}>
                                                {sign}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                                <motion.span variants={childrenVariants}>
                                    <Link
                                        as="/forgot-password"
                                        href={'/forgot-password?email=' + email}>
                                        <a className="text-blue-600 hover:underline focus-visible:underline focus:outline-none">
                                            Forgotten password?
                                        </a>
                                    </Link>
                                </motion.span>
                            </div>

                            {isLoading && <span>Loading...</span>}
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
                        </motion.form>
                    </AnimatePresence>
                </AnimateSharedLayout>
            </PageWrapper>
        </>
    );
};
