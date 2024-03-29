import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

type Props = {
    children: ReactNode;
};
const SmoothScroll = ({ children }: Props): JSX.Element => {
    // scroll container
    const scrollRef = useRef<HTMLDivElement>(null);

    // page scrollable height based on content length
    const [pageHeight, setPageHeight] = useState(0);

    // update scrollable height when browser is resizing
    const resizePageHeight = useCallback((entries) => {
        for (const entry of entries) {
            setPageHeight(entry.contentRect.height);
        }
    }, []);

    // observe when browser is resizing
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries): void => resizePageHeight(entries));
        scrollRef && scrollRef.current !== null && resizeObserver.observe(scrollRef.current);
        return () => resizeObserver.disconnect();
    }, [scrollRef, resizePageHeight]);

    const { scrollY } = useViewportScroll(); // measures how many pixels user has scrolled vertically
    // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
    // ... based on current scroll position to translateY the document in a natural way
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
    const physics = { damping: 100, mass: 0.27, stiffness: 800 }; // easing of smooth scroll
    const spring = useSpring(transform, physics); // apply easing to the negative scroll value
    return (
        <>
            <motion.div
                ref={scrollRef}
                style={{ y: spring }} // translateY of scroll container using negative scroll value
                className="scroll-container bg-transparent">
                {children}
            </motion.div>
            {/* blank div that has a dynamic height based on the content's inherent height */}
            {/* this is neccessary to allow the scroll container to scroll... */}
            {/* ... using the browser's native scroll bar */}
            <div style={{ height: pageHeight }} />
        </>
    );
};

export default SmoothScroll;
