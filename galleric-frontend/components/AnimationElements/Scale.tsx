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

    const initial = elementTop - clientHeight;
    const final = elementTop - clientHeight / 4;

    const scaleY = useTransform(scrollY, [initial, final], [1 - scaleOffset, 1 + scaleOffset]);
    const physics = { damping: 100 };
    const scaleSpring = useSpring(scaleY, physics);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            const onResize = () => {
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
