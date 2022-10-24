import { motion, useReducedMotion, useTransform, useViewportScroll } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

type BackgroundProps = {
    children: ReactNode;
    colorFrom: string;
    colorTo: string;
};
const Background = ({ children, colorFrom, colorTo }: BackgroundProps): JSX.Element => {
    const prefersReducedMotion = useReducedMotion();
    const [elementTop, setElementTop] = useState(0);
    const [elementHeight, setElementHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const { scrollY } = useViewportScroll();

    const background = useTransform(scrollY, [elementTop, elementHeight], [colorFrom, colorTo]);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            const onResize = () => {
                setElementTop(
                    element.getBoundingClientRect().top + window.scrollY || window.pageYOffset
                );
                setElementHeight(element.clientHeight);
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
        <motion.div
            className="relative z-20 overflow-hidden"
            ref={ref}
            style={{ backgroundColor: background }}>
            {children}
        </motion.div>
    );
};

export default Background;
