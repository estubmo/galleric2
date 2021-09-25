import { useSpring, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import IdnezSquare from '../components/IdnezSquare';

const Soldart = (): JSX.Element => {
    const n = 240; // Or something else

    const { scrollYProgress } = useViewportScroll();
    const scaleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
    const springScaleY = useSpring(scaleY);
    return (
        <div className="h-full mt-24 bg-gray-900">
            <div className="flex flex-wrap justify-center">
                {[...Array(n)].map((e, i) => (
                    <IdnezSquare key={i} index={i} springScaleY={springScaleY} />
                ))}
            </div>
        </div>
    );
};

export default Soldart;
