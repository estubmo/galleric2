import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type Props = {
    route: {
        name: string;
        path: string;
    };
    onClick?: () => void;
    active: boolean;
    className?: string;
};

const variants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1
    }
};

const hoverVariants = {
    rest: {
        width: 0,
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: 'easeIn'
        }
    },
    hover: {
        width: '100%',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: 'easeOut'
        }
    }
};

const NavBarLink = ({ route, active, onClick = undefined, className }: Props): JSX.Element => {
    return (
        <motion.div variants={variants} className={className}>
            <Link href={route.path} passHref>
                <motion.div className="relative" initial="rest" animate="rest" whileHover="hover">
                    <motion.button
                        className="focus-visible:underline focus:outline-none"
                        onClick={onClick}>
                        <motion.a className={'tracking-widest select-none uppercase'}>
                            {route.name}
                        </motion.a>
                        <motion.div
                            className="absolute bg-white rounded-xl"
                            style={{
                                willChange: 'transform',
                                height: !active ? 2 : 0,
                                bottom: '-2px'
                            }}
                            variants={!active ? hoverVariants : undefined}
                        />
                        {active && (
                            <motion.div
                                layoutId={`navbarlink-${onClick ? 'xs' : 'md'}`}
                                className="w-full bg-white rounded-xl"
                                style={{ height: 2 }}
                            />
                        )}
                    </motion.button>
                </motion.div>
            </Link>
        </motion.div>
    );
};

export default NavBarLink;
