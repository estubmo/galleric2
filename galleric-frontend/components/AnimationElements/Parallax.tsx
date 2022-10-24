import {
    motion,
    useReducedMotion,
    useSpring,
    useTransform,
    useViewportScroll
} from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

type ParallaxProps = {
    children: ReactNode;
    offset?: number;
};
const Parallax = ({ children, offset = 50 }: ParallaxProps): JSX.Element => {
    const prefersReducedMotion = useReducedMotion();
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useViewportScroll();

    const initial = elementTop - clientHeight;
    const final = elementTop + offset;

    const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
    const y = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => {
        const element = ref.current;
        if (element) {
            setElementTop(
                element.getBoundingClientRect().top + window.scrollY || window.pageYOffset
            );
            setClientHeight(window.innerHeight);
        }
    }, [ref]);

    if (prefersReducedMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
};

export default Parallax;
