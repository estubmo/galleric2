import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

interface Props {
    className: string;
}

const CartButton = ({ className }: Props): JSX.Element => {
    return (
        <motion.svg
            version="1.1"
            id="cart_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            strokeWidth="0.25mm"
            viewBox="0 0 512.001 512.001"
            className={clsx('fill-current select-none', className)}
            overflow="visible"
            preserveAspectRatio="none"
            role="button"
            whileTap={{ scale: 0.75 }}
            whileHover={{ scale: 1.1 }}
            style={{ originX: '50%', originY: '50%', willChange: 'transform' }}>
            <g>
                <path
                    d="M503.142,79.784c-7.303-8.857-18.128-13.933-29.696-13.933H176.37c-6.085,0-11.023,4.938-11.023,11.023
c0,6.085,4.938,11.023,11.023,11.023h297.07c5.032,0,9.541,2.1,12.688,5.914c3.197,3.88,4.475,8.995,3.511,13.972l-44.054,220.282
c-1.709,7.871-8.383,13.366-16.232,13.366H184.323L83.158,36.854C77.69,21.234,62.886,10.74,45.932,10.74
c-0.005,0-0.011,0-0.017,0c-14.38,0.496-28.963,0.491-32.535,0.248c-3.555-0.772-7.397,0.22-10.152,2.976
c-4.305,4.305-4.305,11.282,0,15.587c3.412,3.412,4.564,4.564,43.068,3.23c7.22,0,13.674,4.564,15.995,11.188l103.618,311.962
c1.499,4.503,5.71,7.545,10.461,7.545h252.982c18.31,0,33.841-12.638,37.815-30.909l44.109-220.525
C513.503,100.513,510.544,88.757,503.142,79.784z"
                />

                <path
                    d="M424.392,424.11H223.77c-6.785,0-13.162-4.674-15.46-11.233l-21.495-63.935c-1.94-5.771-8.207-8.885-13.961-6.934
c-5.771,1.935-8.874,8.19-6.934,13.961l21.539,64.061c5.473,15.625,20.062,26.119,36.31,26.119h200.622
c6.085,0,11.023-4.933,11.023-11.018S430.477,424.11,424.392,424.11z"
                />

                <path
                    d="M231.486,424.104c-21.275,0-38.581,17.312-38.581,38.581s17.306,38.581,38.581,38.581s38.581-17.312,38.581-38.581
S252.761,424.104,231.486,424.104z M231.486,479.22c-9.116,0-16.535-7.419-16.535-16.535c0-9.116,7.419-16.535,16.535-16.535
c9.116,0,16.535,7.419,16.535,16.535C248.021,471.802,240.602,479.22,231.486,479.22z"
                />

                <path
                    d="M424.392,424.104c-21.269,0-38.581,17.312-38.581,38.581s17.312,38.581,38.581,38.581
c21.269,0,38.581-17.312,38.581-38.581S445.661,424.104,424.392,424.104z M424.392,479.22c-9.116,0-16.535-7.419-16.535-16.535
c0-9.116,7.419-16.535,16.535-16.535c9.116,0,16.535,7.419,16.535,16.535C440.927,471.802,433.508,479.22,424.392,479.22z"
                />
            </g>
        </motion.svg>
    );
};

export default CartButton;