import { motion, useMotionValue } from 'framer-motion';
import React from 'react';

type Props = {
    containerClassName: string;
    svgClassName: string;
};
const Stub = ({ containerClassName, svgClassName }: Props): JSX.Element => {
    const pathLength = useMotionValue(0);

    const variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 15,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.div className={containerClassName}>
            <svg className={svgClassName} viewBox="-2 -2 185 95" xmlns="http://www.w3.org/2000/svg">
                <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" strokeWidth="0.25mm">
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{ pathLength }}
                        d="M 90.2 13.5 Q 90.2 10 87 6.9 A 15.234 15.234 0 0 0 80.094 3.172 Q 77.711 2.563 74.889 2.506 A 29.125 29.125 0 0 0 74.3 2.5 A 38.403 38.403 0 0 0 67.07 3.228 Q 63.034 4.002 58.6 5.6 A 26.063 26.063 0 0 0 53.211 8.217 A 22.691 22.691 0 0 0 50.8 10 A 21.421 21.421 0 0 0 48.363 12.441 Q 45.7 15.621 45.7 18.8 Q 45.7 23.539 50.539 27.504 A 25.871 25.871 0 0 0 53.2 29.4 Q 55.498 30.795 61.599 33.638 A 372.673 372.673 0 0 0 64.45 34.95 Q 71.281 38.063 75.138 40.227 A 48.097 48.097 0 0 1 76.8 41.2 Q 82.7 44.8 84.95 48.9 Q 86.761 52.2 87.114 55.11 A 11.52 11.52 0 0 1 87.2 56.5 A 16.719 16.719 0 0 1 86.039 62.503 A 23.572 23.572 0 0 1 83.9 66.7 A 44.626 44.626 0 0 1 74.612 77.25 A 59.343 59.343 0 0 1 66.9 82.7 A 52.912 52.912 0 0 1 48.958 89.357 A 72.423 72.423 0 0 1 35.8 90.5 A 55.793 55.793 0 0 1 24.385 89.4 Q 17.124 87.883 11.558 84.271 A 32.441 32.441 0 0 1 8 81.6 A 21.735 21.735 0 0 1 0.05 65.769 A 27.445 27.445 0 0 1 0 64.1 Q 0 57.3 4.95 49.1 A 34.672 34.672 0 0 1 9.527 43.036 A 25.51 25.51 0 0 1 17.1 37.5 A 9.202 9.202 0 0 1 17.699 37.283 Q 18.622 36.986 19.19 37.068 A 1.387 1.387 0 0 1 19.35 37.1 Q 20.043 37.285 18.388 38.751 A 18.84 18.84 0 0 1 18.1 39 A 32.73 32.73 0 0 0 13.593 43.285 A 27.356 27.356 0 0 0 11.2 46.5 Q 5.6 55.3 5.6 65.6 A 20.498 20.498 0 0 0 6.853 72.849 A 18.784 18.784 0 0 0 9.4 77.5 Q 14.773 84.691 26.389 86.949 A 55.352 55.352 0 0 0 33 87.8 Q 34.455 87.953 36.994 87.989 A 117.516 117.516 0 0 0 38.65 88 A 28.733 28.733 0 0 0 41.257 87.868 Q 43.972 87.619 47.628 86.899 A 105.936 105.936 0 0 0 48.85 86.65 Q 55.3 85.3 61.3 82.2 Q 74.2 75.4 78 64.6 A 19.281 19.281 0 0 0 78.97 61.064 A 15.867 15.867 0 0 0 79.2 58.4 A 14.377 14.377 0 0 0 75.697 49.013 A 21.234 21.234 0 0 0 73.1 46.4 Q 69.8 43.8 59.65 39.45 Q 50.063 35.342 46.409 33.062 A 20.601 20.601 0 0 1 46 32.8 A 22.945 22.945 0 0 1 42.149 29.59 Q 39.984 27.301 39.037 24.711 A 12.162 12.162 0 0 1 38.3 20.5 A 12.204 12.204 0 0 1 39.972 14.47 Q 41.696 11.396 45.2 8.4 A 32.548 32.548 0 0 1 56.715 2.234 Q 63.867 0 73.2 0 A 46.717 46.717 0 0 1 78.672 0.302 Q 81.486 0.634 83.846 1.334 A 21.898 21.898 0 0 1 87.05 2.55 A 13.79 13.79 0 0 1 90.359 4.712 A 10.411 10.411 0 0 1 93.6 10.2 Q 93.8 11.2 93.8 12.2 A 8.25 8.25 0 0 1 92.02 17.289 A 12.533 12.533 0 0 1 90.2 19.2 Q 88.139 20.849 84.924 21.954 A 28.333 28.333 0 0 1 83.5 22.4 Q 81.7 22.9 81.5 22 A 1.147 1.147 0 0 1 81.486 21.826 Q 81.486 20.68 84 20.4 A 8.886 8.886 0 0 0 86.407 19.778 A 5.906 5.906 0 0 0 89.9 15.6 A 8.663 8.663 0 0 0 90.15 14.329 A 7.124 7.124 0 0 0 90.2 13.5 Z"
                        id="0"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{ pathLength }}
                        d="M 101.5 45.6 L 96.3 45.6 A 0.679 0.679 0 0 1 96.013 45.542 Q 95.845 45.465 95.744 45.285 A 1.025 1.025 0 0 1 95.65 45.05 Q 95.518 44.565 95.697 44.079 A 1.914 1.914 0 0 1 95.75 43.95 A 1.23 1.23 0 0 1 95.908 43.688 A 0.726 0.726 0 0 1 96.5 43.4 L 102.5 43.4 A 203.664 203.664 0 0 1 105.13 37.841 Q 107.263 33.513 109.2 30.2 A 45.862 45.862 0 0 1 110.881 27.526 Q 112.573 25.045 114.101 23.689 A 9.587 9.587 0 0 1 114.9 23.05 Q 117.27 21.364 118.435 21.215 A 1.695 1.695 0 0 1 118.65 21.2 Q 119.8 21.2 120.3 21.4 Q 122.6 22.5 122.6 25.95 A 13.2 13.2 0 0 1 122.29 28.679 Q 121.755 31.2 120.3 34.3 A 251.29 251.29 0 0 1 117.464 40.152 A 205.774 205.774 0 0 1 115.8 43.4 L 120.6 43.4 A 0.679 0.679 0 0 1 120.887 43.458 Q 121.055 43.535 121.157 43.716 A 1.025 1.025 0 0 1 121.25 43.95 Q 121.382 44.436 121.203 44.921 A 1.914 1.914 0 0 1 121.15 45.05 A 1.23 1.23 0 0 1 120.992 45.313 A 0.726 0.726 0 0 1 120.4 45.6 L 114.6 45.6 Q 109.1 54.9 101.3 62.1 L 99 72.3 A 11.453 11.453 0 0 0 98.705 74.537 A 10.499 10.499 0 0 0 98.7 74.85 A 4.891 4.891 0 0 0 98.987 76.472 A 6.455 6.455 0 0 0 99.4 77.4 A 2.578 2.578 0 0 0 100.038 78.193 Q 100.555 78.613 101.287 78.685 A 3.185 3.185 0 0 0 101.6 78.7 A 5.791 5.791 0 0 0 103.149 78.475 Q 103.813 78.291 104.526 77.956 A 12.247 12.247 0 0 0 105.4 77.5 A 18.515 18.515 0 0 0 108.179 74.85 Q 111.831 70.666 116 62.4 Q 116.366 61.577 116.857 61.34 A 0.991 0.991 0 0 1 116.95 61.3 A 1.26 1.26 0 0 1 117.059 61.266 Q 117.432 61.168 117.558 61.426 A 0.561 0.561 0 0 1 117.6 61.55 A 0.837 0.837 0 0 1 117.617 61.671 Q 117.645 62.05 117.406 62.72 A 7.719 7.719 0 0 1 117.3 63 Q 114 69.9 112.1 72.8 A 31.387 31.387 0 0 1 109.443 76.504 Q 105.223 81.5 100.6 81.5 A 6.797 6.797 0 0 1 97.785 80.93 A 6.6 6.6 0 0 1 95.5 79.2 A 8.059 8.059 0 0 1 93.61 74.975 A 10.922 10.922 0 0 1 93.5 73.4 Q 93.5 65.385 100.962 46.923 A 272.899 272.899 0 0 1 101.5 45.6 Z M 108.6 43.4 L 113.6 43.4 A 127.937 127.937 0 0 0 116.172 38.582 Q 120.2 30.594 120.2 27 A 8.726 8.726 0 0 0 120.179 26.372 Q 120.08 25 119.5 25 A 1.264 1.264 0 0 0 118.889 25.194 Q 118.053 25.67 116.797 27.315 A 27.997 27.997 0 0 0 116.15 28.2 A 23.195 23.195 0 0 0 115.02 30.021 Q 112.741 34.025 108.6 43.4 Z M 112.3 45.6 L 107.6 45.6 Q 106.4 48.4 102.2 58.9 A 70.188 70.188 0 0 0 108.599 51.188 A 87.928 87.928 0 0 0 112.3 45.6 Z"
                        id="1"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{ pathLength }}
                        d="M 115.3 63.6 L 117.1 60.1 A 656.082 656.082 0 0 0 119.481 55.507 Q 120.403 53.71 121.208 52.108 A 309.731 309.731 0 0 0 122.7 49.1 A 3.487 3.487 0 0 1 125.226 47.141 A 6.246 6.246 0 0 1 126.6 47 L 132.7 47 A 13.821 13.821 0 0 0 130.445 49.099 Q 128.408 51.417 126.356 55.274 A 59.637 59.637 0 0 0 125.45 57.05 Q 122.655 62.754 120.828 66.582 A 437.195 437.195 0 0 0 119.8 68.75 Q 118.246 72.052 117.899 74.117 A 6.588 6.588 0 0 0 117.8 75.2 Q 117.8 77.4 118.55 78.3 A 2.454 2.454 0 0 0 120.284 79.186 A 3.477 3.477 0 0 0 120.6 79.2 Q 122.5 79.2 125.9 75.2 A 40.461 40.461 0 0 0 128.719 71.394 Q 133.525 64.181 140.8 49.1 A 3.713 3.713 0 0 1 143.481 47.116 A 6.073 6.073 0 0 1 144.7 47 L 150.1 47 Q 147.9 48.7 146.65 50.5 Q 145.708 51.857 144.225 54.806 A 118.668 118.668 0 0 0 143.2 56.9 A 251.645 251.645 0 0 0 140.829 61.763 Q 137.767 68.232 136.826 71.461 A 13.202 13.202 0 0 0 136.5 72.8 A 14.124 14.124 0 0 0 136.266 74.231 A 10.824 10.824 0 0 0 136.2 75.4 A 6.952 6.952 0 0 0 136.291 76.577 Q 136.395 77.181 136.619 77.623 A 2.079 2.079 0 0 0 138.4 78.8 A 5.236 5.236 0 0 0 141.442 77.624 Q 145.897 74.368 151.7 62.1 A 5.413 5.413 0 0 1 151.885 61.708 Q 152.379 60.773 152.872 60.987 A 0.569 0.569 0 0 1 152.9 61 Q 153.5 61.3 153.5 61.8 A 1.191 1.191 0 0 1 153.458 62.075 Q 153.344 62.536 152.914 63.453 A 28.616 28.616 0 0 1 152.6 64.1 L 150.85 67.6 A 39.031 39.031 0 0 1 150.369 68.528 Q 149.814 69.566 149.021 70.936 A 146.786 146.786 0 0 1 148.25 72.25 A 46.187 46.187 0 0 1 147.076 74.131 Q 146.53 74.958 146.011 75.65 A 20.271 20.271 0 0 1 145 76.9 A 19.397 19.397 0 0 1 142.878 78.978 Q 140.075 81.3 137.35 81.3 Q 133.85 81.3 132.397 78.425 A 7.026 7.026 0 0 1 132.2 78 Q 131.734 76.834 131.63 75.185 A 15.682 15.682 0 0 1 131.6 74.2 A 13.645 13.645 0 0 1 131.729 72.405 Q 131.851 71.488 132.09 70.443 A 32.513 32.513 0 0 1 132.6 68.5 Q 125.491 80.966 119.424 81.292 A 6.056 6.056 0 0 1 119.1 81.3 Q 113.7 81.3 112.8 76.8 A 2.064 2.064 0 0 1 112.542 76.097 A 2.803 2.803 0 0 1 112.5 75.6 A 12.839 12.839 0 0 1 112.977 72.28 Q 113.775 69.311 115.905 65.694 A 44.317 44.317 0 0 1 116.2 65.2 A 2.34 2.34 0 0 1 115.794 65.168 Q 114.718 64.978 115.28 63.648 A 4.036 4.036 0 0 1 115.3 63.6 Z"
                        id="2"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{ pathLength }}
                        d="M 178.9 19.6 L 179.4 19.6 A 0.484 0.484 0 0 1 179.449 19.605 Q 179.706 19.638 181.15 19.9 A 13.881 13.881 0 0 0 181.794 20.003 Q 182.903 20.151 183.531 20.016 A 2.076 2.076 0 0 0 183.6 20 A 38.512 38.512 0 0 0 181.779 22.106 Q 178.58 26.043 173.2 34 A 215.78 215.78 0 0 0 165.917 45.51 Q 155.777 62.822 155.603 72.66 A 19.295 19.295 0 0 0 155.6 73 A 12.419 12.419 0 0 0 155.757 75.065 Q 155.934 76.11 156.311 76.885 A 3.685 3.685 0 0 0 159 79 Q 159.3 79.1 159.7 79.1 A 4.731 4.731 0 0 0 161.677 78.611 Q 164.155 77.465 167.383 73.63 A 43.772 43.772 0 0 0 167.45 73.55 A 49.291 49.291 0 0 0 174.706 61.809 A 55.422 55.422 0 0 0 175.1 60.9 A 21.978 21.978 0 0 0 176.136 58.224 Q 176.8 56.075 176.8 54.2 A 10.097 10.097 0 0 0 176.599 52.084 Q 175.827 48.5 172.1 48.5 L 171.3 48.5 A 6.301 6.301 0 0 1 171.004 48.526 Q 169.474 48.624 169.2 47.8 Q 168.947 47.04 169.763 46.708 A 2.513 2.513 0 0 1 170.1 46.6 A 6.163 6.163 0 0 1 171.489 46.421 Q 172.005 46.412 172.552 46.48 A 8.442 8.442 0 0 1 172.7 46.5 A 11.577 11.577 0 0 1 175.725 47.366 A 7.981 7.981 0 0 1 179.8 51.4 A 12.153 12.153 0 0 1 180.754 53.799 A 9.454 9.454 0 0 1 181.1 56.3 A 24.952 24.952 0 0 1 178.514 67.196 A 35.052 35.052 0 0 1 174.8 73.2 A 22.058 22.058 0 0 1 169.101 78.619 A 19.197 19.197 0 0 1 158.5 81.6 Q 154.8 81.6 152.5 79.5 A 6.951 6.951 0 0 1 150.258 74.973 A 9.72 9.72 0 0 1 150.2 73.9 Q 150.2 70.005 154.329 61.12 A 125.916 125.916 0 0 1 155 59.7 Q 146.8 75.2 144.4 77.5 A 2.558 2.558 0 0 1 144.232 77.64 Q 143.4 78.268 143.4 76.9 Q 143.4 76.68 143.508 76.406 A 2.536 2.536 0 0 1 143.6 76.2 A 33.838 33.838 0 0 0 145.157 73.92 Q 149.059 67.775 157.55 51.2 A 963.744 963.744 0 0 1 161.823 42.95 Q 168.919 29.422 172.2 24.5 Q 175.6 19.6 178.8 19.6 L 178.9 19.6 Z"
                        id="3"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>
            </svg>
        </motion.div>
    );
};

export default Stub;