import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { KeyboardEvent } from 'react';

interface IPathProps {
    d: string;
}
const Path = ({ d }: IPathProps) => (
    <motion.path fill="transparent" strokeWidth="1" strokeLinecap="round" d={d} />
);

interface ICloseButtonProps {
    width?: number;
    className?: string;
    height?: number;
    close: () => void;
}

export const CloseButton = ({
    close,
    className = '',
    width = 18,
    height = 18
}: ICloseButtonProps): JSX.Element => {
    const handleKeyDown = (e: KeyboardEvent) => {
        e.stopPropagation();
        if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') close();
    };
    return (
        <motion.svg
            className={clsx('fill-current stroke-current select-none ', className)}
            width={width}
            height={height}
            onClick={close}
            aria-pressed={false}
            whileTap={{ scale: 0.75 }}
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.2 }}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            viewBox={`0 0 ${width} ${height}`}>
            <Path d="M 3 16.5 L 17 2.5" />
            <Path d="M 3 2.5 L 17 16.346" />
        </motion.svg>
    );
};
