import {
    motion,
    useReducedMotion,
    useSpring,
    useTransform,
    useViewportScroll
} from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

type ScaleProps = {
    children: ReactNode;
    scaleOffset?: number;
};
const Scale = ({ children, scaleOffset = 0.2 }: ScaleProps): JSX.Element => {
    const prefersReducedMotion = useReducedMotion();
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const { scrollY } = useViewportScroll();

    // start animating our element when we've scrolled it into view
    const initial = elementTop - clientHeight;
    // end our animation when we've scrolled half the viewport
    const final = elementTop - clientHeight / 4;

    // apply a spring to ease the result

    const scaleY = useTransform(scrollY, [initial, final], [1 - scaleOffset, 1 + scaleOffset]);
    const physics = { damping: 100, stiffness: 50 }; // easing of smooth scroll
    const scaleSpring = useSpring(scaleY, physics);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            // save our layout measurements in a function in order to trigger
            // it both on mount and on resize
            const onResize = () => {
                // use getBoundingClientRect instead of offsetTop in order to
                // get the offset relative to the viewport
                setElementTop(
                    element.getBoundingClientRect().top + window.scrollY || window.pageYOffset
                );
                setClientHeight(window.innerHeight);
            };
            onResize();
            window.addEventListener('resize', onResize);
            return () => window.removeEventListener('resize', onResize);
        }
    }, [ref]);

    if (prefersReducedMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div ref={ref} style={{ scale: scaleSpring }}>
            {children}
        </motion.div>
    );
};

export default Scale;
