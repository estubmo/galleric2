import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { routes } from '../utils/routes';
import NavBarHamburgerButton from './NavBarHamburgerButton';
import NavBarLink from './NavBarLink';

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

const Menu = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);

    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'unset';
    }, [open]);

    useEffect(() => {
        router.beforePopState(() => {
            setOpen(false);
            return true;
        });
    }, [router]);

    const handleSetOpen = () => {
        setOpen((prev: boolean) => !prev);
    };

    return (
        <>
            <div className="w-0 h-0 invisible md:w-auto md:h-8 md:visible">
                <motion.div
                    style={{ originX: '50%', originY: 0 }}
                    className="flex items-start justify-between mt-4 w-full text-gray-100 text-lg font-bold"
                    variants={childVariants}>
                    <AnimateSharedLayout type="crossfade">
                        {routes.map((route) => (
                            <NavBarLink
                                className="ml-4"
                                key={route.name}
                                route={route}
                                active={pathname === route.path}
                            />
                        ))}
                    </AnimateSharedLayout>
                </motion.div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto md:h-0 md:invisible">
                <NavBarHamburgerButton isOpen={open} onClick={handleSetOpen} />

                <AnimatePresence exitBeforeEnter>
                    {open && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={variants}
                            className="fixed z-10 inset-0 w-full h-screen bg-gray-900">
                            <motion.div
                                style={{ originX: '50%', originY: 0 }}
                                className="flex flex-col items-center justify-between mt-14 w-full text-gray-100 text-2xl font-bold"
                                variants={childVariants}>
                                {routes.map((route) => (
                                    <NavBarLink
                                        className="mt-2"
                                        key={route.name}
                                        route={route}
                                        active={pathname === route.path}
                                        onClick={handleSetOpen}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Menu;
