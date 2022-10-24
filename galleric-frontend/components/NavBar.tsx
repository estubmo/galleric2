import { AnimatePresence, AnimateSharedLayout, motion, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import useUser from '../lib/useUser';
import { routes } from '../utils/routes';
import AccountButton from './Buttons/AccountButton';
import CartButton from './Buttons/CartButton';
import { CloseButton } from './Buttons/CloseButton';
import NavBarButton from './Buttons/NavBarButton';
import NavBarHamburgerButton from './Buttons/NavBarHamburgerButton';
import Modal from './Modal';
import NavBarLink from './NavBarLink';

const hideNavBarVariants = {
    show: { opacity: 1, y: 0 },
    hide: { opacity: 0.0, y: '-100%' }
};

const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

const childVariants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const SCROLL_Y_MIN_TRESHHOLD = 100;
interface Links {
    href: string;
    as: string;
}
const signInLink = { href: '/sign?sign=in', as: '/signin' };
const accountLink = { href: '/account', as: '/account' };

const NavBar = (): JSX.Element => {
    const router = useRouter();
    const { user } = useUser();
    const pathname = router.pathname;

    const [link, setLink] = useState<Links>(signInLink);
    const [open, setOpen] = useState<boolean>(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        user ? setLink(accountLink) : setLink(signInLink);
    }, [user]);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'unset';
    }, [open]);

    useEffect(() => {
        router.beforePopState(() => {
            setOpen(false);
            return true;
        });
    }, [router]);

    useEffect(() => {
        function handleResize() {
            setOpen(false);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleSetOpen = (value?: boolean | undefined) => {
        setOpen((prev: boolean) => (value !== undefined ? value : !prev));
    };
    const [hideNavBar, setHideNavBar] = useState(false);

    const { scrollY } = useViewportScroll();

    const updateScrollY = useCallback(
        (scrollY) => {
            if (scrollY < prevScrollY) {
                setHideNavBar(false);
            } else if (scrollY > SCROLL_Y_MIN_TRESHHOLD && scrollY > prevScrollY) {
                setHideNavBar(true);
            }

            setPrevScrollY(scrollY);
        },
        [prevScrollY]
    );

    useEffect(() => {
        return scrollY.onChange((y) => updateScrollY(y));
    }, [scrollY, updateScrollY]);

    return (
        <div className="flex justify-center w-full">
            <motion.nav
                className="fixed z-20 flex items-center justify-between w-full h-auto max-w-sm p-6 md:max-w-full"
                initial={{
                    backgroundColor: 'rgba(0,0,0,0)'
                }}
                whileHover={{
                    backgroundColor: 'rgba(0,0,0,0.1)'
                }}
                variants={hideNavBarVariants}
                animate={hideNavBar ? 'hide' : 'show'}
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}>
                <div className="relative z-20 flex-1">
                    <Link href="/" passHref shallow>
                        <motion.button
                            className="focus:outline-none"
                            whileTap={{ scale: 0.75 }}
                            whileHover={{ scale: 1.1 }}
                            whileFocus={{ scale: 1.2 }}
                            onClick={() => handleSetOpen(false)}>
                            <a>
                                <Image
                                    className="filter invert"
                                    src="/images/stub_sig.png"
                                    alt="svanhild stub signature"
                                    width={100}
                                    height={52}
                                />
                            </a>
                        </motion.button>
                    </Link>
                </div>

                <div className="items-center flex-shrink-0">
                    <div className="hidden w-0 h-0 md:w-auto md:h-8 md:flex">
                        <motion.div
                            style={{ originX: '50%', originY: 0 }}
                            className="flex items-center justify-between w-full space-x-4 font-bold text-gray-100 text-md"
                            variants={childVariants}>
                            <AnimateSharedLayout>
                                {routes.map((route) => (
                                    <NavBarLink
                                        key={route.name}
                                        route={route}
                                        active={pathname === route.path}
                                    />
                                ))}
                            </AnimateSharedLayout>
                        </motion.div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-auto md:h-0 md:invisible">
                        <AnimatePresence exitBeforeEnter>
                            <div key="MenuBar">
                                <NavBarHamburgerButton
                                    isOpen={open}
                                    onClick={() => handleSetOpen()}
                                />
                                {open && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants}
                                        className="fixed inset-0 z-10 w-full h-screen py-4 overflow-y-auto bg-gray-900 bg-opacity-90">
                                        <motion.div
                                            style={{ originX: '50%', originY: 0 }}
                                            className="flex flex-col items-center justify-between w-full text-2xl font-bold text-gray-100 mt-14"
                                            variants={childVariants}>
                                            {routes.map((route) => (
                                                <NavBarLink
                                                    className="mt-2"
                                                    key={route.name}
                                                    route={route}
                                                    active={pathname === route.path}
                                                    onClick={() => handleSetOpen(false)}
                                                />
                                            ))}
                                        </motion.div>
                                        {/* TODO: Add Footer here */}
                                    </motion.div>
                                )}
                            </div>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="z-20 flex-1">
                    <div className="flex justify-end space-x-4">
                        <NavBarButton
                            href={link.href}
                            as={link.as}
                            onClick={() => handleSetOpen(false)}>
                            <AccountButton className="text-gray-100" />
                        </NavBarButton>
                        <NavBarButton
                            href="/cart"
                            onClick={() => handleSetOpen(false)}
                            disabled={pathname === '/cart'}>
                            <CartButton className="text-gray-100" />
                        </NavBarButton>
                    </div>
                </div>
            </motion.nav>
            <Modal showModal={!!router.query.openCart} returnHref={router.pathname}>
                <div className="z-40 flex flex-col p-4 m-20 text-white bg-gray-900 w-90v h-90v bg-opacity-90">
                    <div className="relative">
                        <div className="absolute top-0 right-0">
                            <CloseButton
                                className="text-gray-100 cursor-pointer focus-visible:underline focus:outline-none"
                                close={() => router.back()}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default NavBar;
