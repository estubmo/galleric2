import clsx from 'clsx';
import { motion, SVGMotionProps, Transition } from 'framer-motion';
import React from 'react';

interface Props extends SVGMotionProps<any> {
    isOpen?: boolean;
    width?: number;
    className?: string;
    height?: number;
    strokeWidth?: string | number;
    transition?: Transition;
    lineProps?: any;
}

const MenuButton = ({
    isOpen = false,
    width = 18,
    height = 18,
    strokeWidth = 1,
    transition = undefined,
    className = '',
    lineProps = null,
    ...props
}: Props): JSX.Element => {
    const variant = isOpen ? 'opened' : 'closed';
    const top = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: 45,
            translateY: 2
        }
    };
    const center = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    };
    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: -45,
            translateY: -2
        }
    };
    lineProps = {
        strokeWidth: strokeWidth as number,
        vectorEffect: 'non-scaling-stroke',
        initial: 'closed',
        animate: variant,
        exit: 'closed',
        transition,
        ...lineProps
    };

    const unitHeight = 4;
    const unitWidth = (unitHeight * (width as number)) / (height as number);

    return (
        <motion.svg
            className={clsx('fill-current stroke-current select-none', className)}
            viewBox={`0 0 ${unitWidth} ${unitHeight}`}
            overflow="visible"
            preserveAspectRatio="none"
            role="button"
            width={width}
            height={height}
            whileTap={{ scale: 0.75 }}
            whileHover={{ scale: 1.1 }}
            style={{ originX: '50%', originY: '50%', willChange: 'transform' }}
            {...props}>
            <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
            <motion.line x1="0" x2={unitWidth} y1="2" y2="2" variants={center} {...lineProps} />
            <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
        </motion.svg>
    );
};

export { MenuButton };
