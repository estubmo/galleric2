import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Props = {
    showModal: boolean;
    children: React.ReactNode;
    fromPath: string;
};

const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

const Modal = ({ showModal, children, fromPath }: Props): JSX.Element => {
    const router = useRouter();
    const [showModalState, setShowModalState] = useState(showModal);
    const { scrollY } = useViewportScroll();

    useEffect(() => {
        document.body.style.overflow = showModal ? 'hidden' : 'unset';
        setShowModalState(showModal);
    }, [showModal]);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (e.target === e.currentTarget) {
            router.push(fromPath);
        }
    };
    return (
        <AnimatePresence exitBeforeEnter>
            {showModalState && (
                <motion.div
                    className="overlay flex justify-center cursor-default"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    onClick={handleClick}
                    onKeyPress={(e) => {
                        e.key === ('Esc' || 'Escape') && console.log('ESC CLICKED'); //TODO: Add window listener with useEffect
                    }}
                    role="button"
                    tabIndex={0}>
                    <div className="fixed z-30" style={{ top: scrollY.get() }}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
