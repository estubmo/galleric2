import { motion } from 'framer-motion';
import * as React from 'react';

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

interface ICloseButtonProps {
    close: () => void;
}

export const CloseButton = ({ close }: ICloseButtonProps): JSX.Element => (
    <button onClick={close} className="close">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path d="M 3 16.5 L 17 2.5" />
            <Path d="M 3 2.5 L 17 16.346" />
        </svg>
    </button>
);
