import { motion, MotionValue } from 'framer-motion';
import React, { useState } from 'react';

type Props = {
    index: number;
    springScaleY: MotionValue<number>;
};
const IdnezSquare = ({ springScaleY }: Props): JSX.Element => {
    const color = `rgb(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${
        Math.random() * 100 + 155
    })`;
    const [isHovered, setHovered] = useState(false);
    const [zIndex, setZIndex] = useState(0);

    return (
        <motion.div
            whileHover={{
                backgroundColor: '#fff',
                boxShadow: '0 0 15px 15px rgba(255, 255, 255, 1) '
            }}
            onHoverStart={() => {
                setZIndex(10);
                setHovered(true);
            }}
            onHoverEnd={() => {
                setHovered(false);
            }}
            onAnimationEnd={() => setZIndex(1)}
            transition={{ duration: isHovered ? 0.05 : 1.5 }}
            className="w-24 h-24"
            style={{ backgroundColor: color, zIndex: zIndex, scale: springScaleY }}></motion.div>
    );
};

export default IdnezSquare;
