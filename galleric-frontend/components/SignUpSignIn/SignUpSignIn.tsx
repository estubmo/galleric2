import axios from 'axios';
import clsx from 'clsx';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useAsyncSetState } from '../../lib/hooks';
import useUser from '../../lib/useUser';
import { childrenVariants, containerVariants, errorMessageVariant } from '../../utils/variants';

interface SignUpSignInProps {
    sign: string | string[];
}

export const SignUpSignIn = ({ sign }: SignUpSignInProps): JSX.Element => {
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [redirectTo, setRedirectTo] = useAsyncSetState<string>('/account');
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

    const handleSignIn = async () => {
        router.prefetch('/');
        try {
            setRedirectTo('/');
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
            setIsLoading(false);
        }
    };

    const setRedirectToAsync = async (path: string) => {
        return await setRedirectTo(path);
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
        <div className="h-screen bg-gray-900">
            <Head>
                <title>Galleric | Sign {sign}</title>
                <meta name="description" content={`Sign ${sign}`} />
            </Head>

            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="flex flex-col items-center justify-center w-full h-screen md:p-24">
                <AnimateSharedLayout type="crossfade">
                    <AnimatePresence exitBeforeEnter>
                        <motion.form
                            className="flex flex-col items-start max-w-lg h-50v font-light tracking-widest md:w-2/3"
                            onSubmit={handleSubmit}
                            key="signInUpForm">
                            <motion.h2
                                variants={childrenVariants}
                                className="flex text-gray-400 text-4xl">
                                <Link href="/sign?sign=in" as="/signin" passHref>
                                    <div className="focus-visible:underline font-thin tracking-widest focus:outline-none cursor-pointer">
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
                                    <div className="focus-visible:underline font-thin tracking-widest focus:outline-none cursor-pointer">
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
                                className="placeholder-gray-600 autofill:text-fill-gray-200 autofill:shadow-fill-gray-900 py-2 w-full text-gray-200 bg-transparent focus:bg-transparent border-0 border-b hover:border-gray-100 focus:border-gray-100 border-gray-400 focus:outline-none"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address goes here"
                            />
                            <motion.label
                                variants={childrenVariants}
                                className="mt-4 text-xs uppercase"
                                htmlFor="email">
                                Password
                            </motion.label>
                            <motion.input
                                variants={childrenVariants}
                                className="placeholder-gray-600 autofill:text-fill-gray-200 autofill:shadow-fill-gray-900 py-2 w-full text-gray-200 bg-transparent focus:bg-transparent border-0 border-b hover:border-gray-100 focus:border-gray-100 border-gray-400 focus:outline-none"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />

                            <motion.button
                                variants={childrenVariants}
                                className="mt-4 pl-4 pr-10 py-2 text-gray-100 focus-visible:underline font-light tracking-wider bg-gray-800 border-b border-gray-400 focus:outline-none disabled:opacity-50 disabled:cursor-wait uppercase"
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
            </motion.div>
        </div>
    );
};
