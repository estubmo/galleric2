import { motion, useMotionValue } from 'framer-motion';
import React from 'react';

type Props = {
    containerClassName: string;
    svgClassName: string;
};
const Svanhild = ({ containerClassName, svgClassName }: Props): JSX.Element => {
    const pathLength = useMotionValue(0);

    const variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 10,
                ease: 'easeOut'
            }
        }
    };
    return (
        <motion.div className={containerClassName}>
            <svg className={svgClassName} viewBox="-2 -2 314 95" xmlns="http://www.w3.org/2000/svg">
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
                        d="M 122.6 46.5 L 122.1 48.3 A 239.499 239.499 0 0 1 119.295 56.564 Q 116.612 63.982 114.171 68.797 A 48.92 48.92 0 0 1 112.7 71.5 Q 107.666 79.97 102.249 81.672 A 9.123 9.123 0 0 1 99.5 82.1 A 8.391 8.391 0 0 1 97.318 81.842 Q 94.475 81.074 93.997 78.027 A 8.564 8.564 0 0 1 93.9 76.7 A 16.986 16.986 0 0 1 94.112 74.205 Q 94.509 71.562 95.655 67.797 A 99.519 99.519 0 0 1 96.9 64 A 7.405 7.405 0 0 1 96.63 64.405 Q 95.823 65.524 95.35 65.05 A 1.268 1.268 0 0 1 95.102 64.709 Q 94.934 64.364 95.028 63.941 A 1.792 1.792 0 0 1 95.1 63.7 L 96.9 60.3 A 18.987 18.987 0 0 0 98.483 55.684 A 16.288 16.288 0 0 0 98.8 52.5 A 14.67 14.67 0 0 0 98.734 51.048 Q 98.588 49.587 98.119 48.773 A 1.99 1.99 0 0 0 97.2 47.9 A 273.652 273.652 0 0 1 99.183 47.577 Q 103.348 46.914 104.188 46.95 A 1.613 1.613 0 0 1 104.2 46.95 A 1.937 1.937 0 0 1 104.677 47.029 Q 105.266 47.212 105.45 47.8 A 5.387 5.387 0 0 1 105.656 48.792 A 7.064 7.064 0 0 1 105.7 49.6 Q 105.7 55.7 102.55 64 Q 99.815 71.208 99.455 74.306 A 7.387 7.387 0 0 0 99.4 75.15 A 14.105 14.105 0 0 0 99.432 76.135 Q 99.569 78.085 100.3 78.45 A 4.334 4.334 0 0 0 101.313 78.814 A 3.675 3.675 0 0 0 102.1 78.9 A 4.098 4.098 0 0 0 103.926 78.426 Q 105.809 77.489 108 74.7 A 30.833 30.833 0 0 0 110.217 71.427 Q 112.267 67.983 114.318 62.995 A 101.843 101.843 0 0 0 114.6 62.3 A 20.445 20.445 0 0 1 113.775 60.097 Q 113.2 58.22 113.2 56.65 A 17.113 17.113 0 0 1 113.332 54.474 A 12.491 12.491 0 0 1 113.8 52.3 A 16.976 16.976 0 0 1 114.979 49.434 Q 116.697 46.207 119.5 45.2 A 5.062 5.062 0 0 1 120.228 44.985 A 3.727 3.727 0 0 1 121 44.9 A 2.303 2.303 0 0 1 121.633 44.98 Q 122.343 45.183 122.532 45.908 A 2.357 2.357 0 0 1 122.6 46.5 Z"
                        id="1"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{ pathLength }}
                        d="M 147.983 61.53 A 123.891 123.891 0 0 0 147.5 62.45 Q 144.961 67.335 143.991 70.326 A 15.43 15.43 0 0 0 143.55 71.95 A 43.109 43.109 0 0 0 143.207 73.802 Q 142.92 75.583 142.901 76.87 A 12.201 12.201 0 0 0 142.9 77.05 Q 142.9 78.877 144.216 78.992 A 2.101 2.101 0 0 0 144.4 79 A 2.827 2.827 0 0 0 145.633 78.68 Q 147.132 77.948 149.06 75.55 A 26.892 26.892 0 0 0 149.1 75.5 Q 153.2 70.4 157.2 62.2 A 3.616 3.616 0 0 1 157.393 61.822 Q 157.621 61.439 157.877 61.287 A 0.709 0.709 0 0 1 158.1 61.2 Q 158.888 60.905 158.9 61.773 A 1.964 1.964 0 0 1 158.9 61.8 A 2.106 2.106 0 0 1 158.858 62.203 Q 158.819 62.404 158.743 62.629 A 4.984 4.984 0 0 1 158.6 63 A 118.255 118.255 0 0 1 155.252 69.321 Q 149.981 78.523 145.786 80.829 A 5.584 5.584 0 0 1 143.1 81.6 A 5.125 5.125 0 0 1 139.082 79.716 A 7.912 7.912 0 0 1 138.4 78.8 Q 137.691 77.619 137.541 75.817 A 12.222 12.222 0 0 1 137.5 74.8 Q 137.5 72.984 138.028 70.587 A 35.956 35.956 0 0 1 138.5 68.7 Q 131.279 80.345 125.85 81.478 A 5.617 5.617 0 0 1 124.7 81.6 Q 123.1 81.6 121.8 80.6 A 6.513 6.513 0 0 1 119.374 77.289 Q 118.8 75.632 118.8 73.4 A 25.122 25.122 0 0 1 121.06 63.214 Q 123.183 58.393 127.3 53.5 Q 132.1 47.9 139.1 46.2 A 15.606 15.606 0 0 1 141.174 45.796 A 12.558 12.558 0 0 1 142.7 45.7 A 10.883 10.883 0 0 1 147.654 46.821 A 10.999 10.999 0 0 1 150.5 48.9 A 3.673 3.673 0 0 1 150.861 49.362 Q 151.214 49.904 151.214 50.421 A 1.549 1.549 0 0 1 151.1 51 Q 150.7 52 149.4 51.8 A 6.03 6.03 0 0 0 148.561 50.04 Q 147.456 48.495 145.413 48.248 A 6.762 6.762 0 0 0 144.6 48.2 A 7.305 7.305 0 0 0 141.717 48.864 Q 138.331 50.325 134 55 A 50.341 50.341 0 0 0 129.721 60.509 A 62.84 62.84 0 0 0 127.3 64.4 A 45.491 45.491 0 0 0 125.503 67.67 Q 123.893 70.936 123.516 73.381 A 9.318 9.318 0 0 0 123.4 74.8 Q 123.4 77.515 124.611 78.34 A 2.235 2.235 0 0 0 125.9 78.7 A 6.03 6.03 0 0 0 129.24 77.477 Q 133.38 74.653 138.832 65.305 A 133.84 133.84 0 0 0 141.6 60.3 Q 143.062 57.454 144.168 55.998 A 8.489 8.489 0 0 1 144.8 55.25 A 4.348 4.348 0 0 1 147.914 53.903 A 5.784 5.784 0 0 1 148.1 53.9 A 2.287 2.287 0 0 1 148.294 53.911 Q 148.809 53.957 150.15 54.2 A 13.881 13.881 0 0 0 150.794 54.303 Q 151.903 54.451 152.531 54.316 A 2.076 2.076 0 0 0 152.6 54.3 Q 150.934 55.966 147.983 61.53 Z"
                        id="2"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{ pathLength }}
                        d="M 175.532 73.799 A 12.961 12.961 0 0 0 175.1 76.8 Q 175.1 79.33 176.899 79.398 A 2.668 2.668 0 0 0 177 79.4 A 4.833 4.833 0 0 0 179.769 78.319 Q 183.17 75.857 187.706 67.788 A 127.278 127.278 0 0 0 190.7 62.1 A 5.413 5.413 0 0 1 190.885 61.708 Q 191.379 60.773 191.872 60.987 A 0.569 0.569 0 0 1 191.9 61 Q 192.5 61.3 192.5 61.8 A 1.593 1.593 0 0 1 192.446 62.194 Q 192.355 62.552 192.108 62.986 A 5.151 5.151 0 0 1 192.1 63 Q 186.8 73.7 183.15 77.75 A 17.359 17.359 0 0 1 181.097 79.708 Q 179.908 80.656 178.719 81.175 A 7.127 7.127 0 0 1 175.85 81.8 A 7.551 7.551 0 0 1 173.453 81.439 A 6.057 6.057 0 0 1 170.3 79 A 4.473 4.473 0 0 1 169.558 77.49 Q 169.3 76.593 169.3 75.45 Q 169.3 73.816 169.828 71.679 A 28.821 28.821 0 0 1 170.3 70 Q 171.3 66.8 175.8 59.6 Q 176.663 58.188 176.849 57.237 A 2.546 2.546 0 0 0 176.9 56.75 A 0.874 0.874 0 0 0 176.392 55.916 Q 176.013 55.722 175.353 55.703 A 5.134 5.134 0 0 0 175.2 55.7 A 2.462 2.462 0 0 0 174.271 55.931 Q 172.413 56.72 168.7 60.2 A 46.609 46.609 0 0 0 163.37 66.078 Q 158.988 71.75 154.8 80 Q 154.409 80.653 153.953 80.986 A 1.833 1.833 0 0 1 153.45 81.25 A 3.574 3.574 0 0 1 153.019 81.359 Q 152.266 81.508 150.82 81.585 A 41.76 41.76 0 0 1 150.5 81.6 A 20.94 20.94 0 0 0 149.609 81.658 Q 148.147 81.788 147.6 82.1 A 208.978 208.978 0 0 0 148.448 80.38 Q 149.811 77.589 152.283 72.401 A 2715.424 2715.424 0 0 0 153.9 69 A 468.071 468.071 0 0 1 156.846 62.965 Q 162.788 51.032 164.9 49 A 3.969 3.969 0 0 1 166.863 47.942 A 5.954 5.954 0 0 1 168.2 47.8 A 2.287 2.287 0 0 1 168.394 47.811 Q 168.909 47.857 170.25 48.1 A 13.881 13.881 0 0 0 170.894 48.203 Q 172.003 48.351 172.631 48.216 A 2.076 2.076 0 0 0 172.7 48.2 Q 169.049 50.174 160.819 66.562 A 287.495 287.495 0 0 0 160.6 67 Q 164.153 62.616 167.219 59.575 A 52.637 52.637 0 0 1 169.15 57.75 A 43.692 43.692 0 0 1 173.972 54.027 A 56.885 56.885 0 0 1 178.4 51.35 A 49.912 49.912 0 0 1 180.772 50.13 Q 184.386 48.4 186.3 48.4 A 3.133 3.133 0 0 1 187.007 48.477 A 2.682 2.682 0 0 1 187.4 48.6 Q 177.406 66.151 175.532 73.799 Z"
                        id="3"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{ pathLength }}
                        d="M 208.5 76.9 A 5.807 5.807 0 0 0 208.576 77.887 Q 208.891 79.7 210.5 79.7 A 4.29 4.29 0 0 0 213.004 78.669 Q 217.282 75.44 223.8 62.1 Q 224.496 60.708 225.044 60.997 A 0.497 0.497 0 0 1 225.05 61 A 1.388 1.388 0 0 1 225.316 61.185 A 0.8 0.8 0 0 1 225.6 61.8 Q 225.6 62.3 224.45 64.65 Q 223.3 67 222.15 69.15 A 55.832 55.832 0 0 1 221.329 70.626 Q 220.313 72.394 218.8 74.8 Q 214.2 81.8 209 81.8 A 6.606 6.606 0 0 1 206.163 81.205 Q 204.678 80.51 203.6 79 Q 202.7 77.7 202.7 75.45 Q 202.7 73.816 203.228 71.679 A 28.821 28.821 0 0 1 203.7 70 Q 204.7 66.8 209.2 59.6 A 13.004 13.004 0 0 0 209.681 58.747 Q 210.122 57.885 210.249 57.237 A 2.546 2.546 0 0 0 210.3 56.75 A 0.874 0.874 0 0 0 209.792 55.916 Q 209.413 55.722 208.753 55.703 A 5.134 5.134 0 0 0 208.6 55.7 A 2.462 2.462 0 0 0 207.671 55.931 Q 205.813 56.72 202.1 60.2 A 47.387 47.387 0 0 0 196.756 66.078 Q 194.278 69.269 191.849 73.275 A 111.225 111.225 0 0 0 188.1 80 A 2.161 2.161 0 0 1 187.061 81.019 Q 186.099 81.5 184.4 81.5 Q 181.7 81.7 181 82.1 A 3388.705 3388.705 0 0 1 189.844 63.844 Q 200.83 41.352 207.09 29.618 A 337.165 337.165 0 0 1 208.5 27 Q 210.052 24.141 211.304 22.684 A 8.59 8.59 0 0 1 211.85 22.1 Q 213.3 20.7 215.3 20.7 A 3.795 3.795 0 0 1 215.571 20.712 Q 216.15 20.755 217.4 20.95 Q 219 21.2 219.8 21.1 Q 217.364 23.617 211.798 33.351 A 366.585 366.585 0 0 0 209.05 38.25 Q 201.3 52.3 194.2 66.8 A 107.823 107.823 0 0 1 197.319 63.051 Q 200.189 59.766 202.65 57.6 Q 206.341 54.352 211.632 51.443 A 68.678 68.678 0 0 1 211.8 51.35 A 49.912 49.912 0 0 1 214.172 50.13 Q 217.786 48.4 219.7 48.4 A 3.133 3.133 0 0 1 220.407 48.477 A 2.682 2.682 0 0 1 220.8 48.6 Q 210.806 66.151 208.932 73.865 A 13.201 13.201 0 0 0 208.5 76.9 Z"
                        id="4"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{ pathLength }}
                        d="M 221.4 68.4 L 227.8 52.1 Q 227.934 51.697 227.978 51.113 A 8.166 8.166 0 0 0 228 50.5 A 2.284 2.284 0 0 0 227.883 49.817 Q 227.683 49.185 227.143 48.382 A 11.563 11.563 0 0 0 226.8 47.9 L 232.3 47.8 A 9.579 9.579 0 0 1 233.156 47.835 Q 234.681 47.973 235 48.65 A 1.203 1.203 0 0 1 235.103 49.021 Q 235.204 49.854 234.4 51.3 L 226.4 70 A 24.982 24.982 0 0 0 225.504 72.205 Q 225.108 73.341 224.907 74.351 A 10.024 10.024 0 0 0 224.7 76.3 A 3.879 3.879 0 0 0 224.865 77.483 Q 225.268 78.744 226.662 79.079 A 4.882 4.882 0 0 0 227.8 79.2 A 4.406 4.406 0 0 0 229.532 78.824 Q 230.185 78.546 230.859 78.063 A 10.602 10.602 0 0 0 231.8 77.3 Q 235.5 73.6 241.2 62.2 A 4.858 4.858 0 0 1 241.388 61.836 Q 241.994 60.781 242.6 61.3 A 0.592 0.592 0 0 1 242.732 61.511 Q 242.768 61.605 242.785 61.723 A 1.609 1.609 0 0 1 242.8 61.95 A 1.145 1.145 0 0 1 242.764 62.198 Q 242.631 62.769 242 64.15 A 700.474 700.474 0 0 1 241.249 65.788 Q 240.892 66.564 240.571 67.256 A 386.488 386.488 0 0 1 240.55 67.3 Q 239.9 68.7 238.05 71.85 A 51.064 51.064 0 0 1 236.928 73.677 Q 235.77 75.472 234.767 76.624 A 15.036 15.036 0 0 1 234.7 76.7 A 22.189 22.189 0 0 1 232.616 78.811 Q 230.107 81.008 227.776 81.341 A 5.84 5.84 0 0 1 226.95 81.4 A 9.502 9.502 0 0 1 224.987 81.211 Q 223.825 80.966 222.961 80.401 A 4.783 4.783 0 0 1 221.7 79.2 Q 220.1 77 220.1 74.3 Q 220.1 71.78 221.233 68.823 A 22.843 22.843 0 0 1 221.4 68.4 Z M 236.149 43.391 A 5.103 5.103 0 0 0 237.6 42.5 A 6.07 6.07 0 0 0 237.75 42.368 A 4.809 4.809 0 0 0 239.3 39.6 Q 239.367 39.223 239.367 38.869 A 3.193 3.193 0 0 0 238.55 36.7 A 3.39 3.39 0 0 0 237.141 35.722 A 3.904 3.904 0 0 0 235.8 35.5 A 4.461 4.461 0 0 0 234.151 35.81 A 5.103 5.103 0 0 0 232.7 36.7 A 6.07 6.07 0 0 0 232.55 36.833 A 4.809 4.809 0 0 0 231 39.6 A 5.111 5.111 0 0 0 230.992 39.671 Q 230.821 41.325 231.8 42.5 A 3.195 3.195 0 0 0 233.256 43.51 A 3.88 3.88 0 0 0 234.5 43.7 A 4.461 4.461 0 0 0 236.149 43.391 Z"
                        id="5"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{ pathLength }}
                        d="M 245.9 64.85 A 297.784 297.784 0 0 0 246.118 64.207 Q 246.715 62.442 246.8 62.1 Q 253.866 55.628 259.768 46.266 A 115.336 115.336 0 0 0 267.3 32.1 A 44.617 44.617 0 0 0 267.512 31.634 Q 268.921 28.486 269.423 26.019 A 12.705 12.705 0 0 0 269.7 23.5 A 14.082 14.082 0 0 0 269.693 23.031 Q 269.683 22.743 269.661 22.492 A 6.417 6.417 0 0 0 269.6 22 Q 268.8 18.7 266.5 18.7 A 6.647 6.647 0 0 0 263.89 19.257 Q 262.803 19.717 261.705 20.56 A 16.244 16.244 0 0 0 259.8 22.3 A 15.417 15.417 0 0 0 258.84 23.438 Q 257.339 25.376 255.15 29.05 Q 252.2 34 247.95 43.8 Q 243.7 53.6 241.4 61.9 Q 241.313 62.25 240.574 64.591 A 658.454 658.454 0 0 1 240.35 65.3 Q 239.4 68.3 239.1 71.5 Q 239 73.4 239 74.6 A 8.766 8.766 0 0 0 239.007 74.955 Q 239.051 76.024 239.35 77.35 A 3.885 3.885 0 0 0 239.622 78.141 Q 239.906 78.747 240.41 79.321 A 7.641 7.641 0 0 0 241.4 80.25 Q 242.555 81.168 244.358 81.462 A 11.466 11.466 0 0 0 246.2 81.6 A 9.15 9.15 0 0 0 247.442 81.514 Q 248.825 81.325 250.284 80.719 A 16.993 16.993 0 0 0 252.8 79.4 A 8.352 8.352 0 0 0 253.478 78.933 Q 253.981 78.55 254.505 78.047 A 17.813 17.813 0 0 0 255.55 76.95 A 165.994 165.994 0 0 0 255.849 76.609 Q 257.09 75.19 257.85 74.25 Q 258.7 73.2 259.85 71.05 A 2705.489 2705.489 0 0 0 260.028 70.717 Q 261.036 68.833 261.45 68.05 A 13.116 13.116 0 0 0 261.524 67.908 Q 261.853 67.268 262.406 66.044 A 128.707 128.707 0 0 0 262.85 65.05 A 774.721 774.721 0 0 1 263.176 64.313 Q 263.673 63.192 263.938 62.606 A 51.559 51.559 0 0 1 264.1 62.25 A 1.574 1.574 0 0 0 264.122 62.2 Q 264.38 61.585 263.9 61.2 A 0.63 0.63 0 0 0 263.65 61.147 Q 263.179 61.147 262.665 61.88 A 5.375 5.375 0 0 0 262.4 62.3 A 150.856 150.856 0 0 1 260.641 65.67 Q 259.193 68.357 257.806 70.64 A 73.281 73.281 0 0 1 255.2 74.65 A 23.196 23.196 0 0 1 255.021 74.903 Q 253.195 77.434 251.312 78.572 A 5.96 5.96 0 0 1 248.2 79.5 Q 246.877 79.5 245.987 78.831 A 3.578 3.578 0 0 1 245 77.65 Q 244 75.8 244 73.65 Q 244 71.5 244.55 69.35 A 54.537 54.537 0 0 1 244.998 67.71 A 64.558 64.558 0 0 1 245.9 64.85 Z M 247.6 58.9 A 64.704 64.704 0 0 0 252.359 53.432 Q 254.624 50.534 256.869 47.093 A 111.024 111.024 0 0 0 257.7 45.8 A 146.533 146.533 0 0 0 260.824 40.647 Q 262.166 38.32 263.223 36.246 A 61.284 61.284 0 0 0 265.05 32.35 A 73.413 73.413 0 0 0 265.966 30.092 Q 267.209 26.86 267.374 25.256 A 4.454 4.454 0 0 0 267.4 24.8 A 8.726 8.726 0 0 0 267.379 24.172 Q 267.28 22.8 266.7 22.8 A 1.045 1.045 0 0 0 266.176 22.989 Q 265.166 23.615 263.211 26.315 A 53.266 53.266 0 0 0 262.9 26.75 A 35.77 35.77 0 0 0 261.378 29.119 Q 258.913 33.263 255.35 40.95 A 423.373 423.373 0 0 0 252.034 48.279 Q 250.434 51.91 249.102 55.151 A 219.603 219.603 0 0 0 247.6 58.9 Z"
                        id="6"
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        style={{ pathLength }}
                        d="M 285.713 78.769 A 3.655 3.655 0 0 0 286.2 78.8 A 4.46 4.46 0 0 0 288.744 77.819 Q 291.871 75.577 296.01 68.213 A 114.086 114.086 0 0 0 298.7 63.1 Q 299 62.5 299.25 61.9 Q 299.5 61.3 300.05 61.1 Q 300.539 60.923 300.751 61.258 A 0.715 0.715 0 0 1 300.8 61.35 A 0.75 0.75 0 0 1 300.854 61.538 Q 300.925 61.988 300.6 62.8 A 83.38 83.38 0 0 1 297.342 69.589 Q 291.505 80.349 285.562 81.307 A 7.293 7.293 0 0 1 284.4 81.4 A 4.795 4.795 0 0 1 280.655 79.723 A 6.614 6.614 0 0 1 280.1 79 A 10.59 10.59 0 0 1 279.064 77.059 A 7.53 7.53 0 0 1 278.5 74.25 A 19.429 19.429 0 0 1 278.676 71.583 A 15.978 15.978 0 0 1 279 69.9 A 67.617 67.617 0 0 1 276.539 73.703 Q 272.281 79.785 269 80.8 A 6.611 6.611 0 0 1 267.629 81.211 A 5.515 5.515 0 0 1 266.65 81.3 Q 265.5 81.3 264.4 81 A 5.949 5.949 0 0 1 260.079 77.055 Q 259.5 75.435 259.5 73.2 A 20.387 20.387 0 0 1 259.994 68.867 Q 260.415 66.936 261.192 64.855 A 37.195 37.195 0 0 1 261.75 63.45 A 39.071 39.071 0 0 1 266.38 55.385 A 45.824 45.824 0 0 1 268.1 53.2 A 20.711 20.711 0 0 1 274.377 48.06 A 19.714 19.714 0 0 1 278 46.6 Q 279.891 45.97 282.39 45.907 A 22.312 22.312 0 0 1 282.95 45.9 A 10.747 10.747 0 0 1 285.568 46.245 Q 286.767 46.546 288.06 47.11 A 21.584 21.584 0 0 1 289.3 47.7 Q 296.1 34.9 300.9 24 Q 302.3 20.7 303.65 19.75 A 6.662 6.662 0 0 1 304.514 19.229 Q 305.377 18.8 306.15 18.8 L 307.55 18.8 A 1.73 1.73 0 0 1 307.693 18.809 Q 308.109 18.847 309.45 19.05 A 19.89 19.89 0 0 0 310.215 19.152 Q 311.321 19.276 312 19.2 Q 310.042 20.988 302.577 34.514 A 693.019 693.019 0 0 0 299.8 39.6 A 789.685 789.685 0 0 0 294.766 49.091 Q 286.631 64.707 284.6 70.8 Q 283.6 73.7 283.6 75.6 Q 283.6 78.485 285.713 78.769 Z M 288.5 49.3 A 4.253 4.253 0 0 0 286.526 48.199 Q 285.768 48 284.85 48 A 4.568 4.568 0 0 0 283.382 48.277 Q 281.996 48.753 280.178 50.044 A 31.058 31.058 0 0 0 278.3 51.5 A 45.916 45.916 0 0 0 267.777 64.254 A 52.543 52.543 0 0 0 267.2 65.3 A 36.572 36.572 0 0 0 265.798 68.188 Q 264.522 71.166 264.333 73.432 A 9.231 9.231 0 0 0 264.3 74.2 Q 264.3 75.8 264.95 77.1 A 2.614 2.614 0 0 0 265.464 77.82 Q 266.009 78.346 266.828 78.395 A 2.87 2.87 0 0 0 267 78.4 A 4.586 4.586 0 0 0 269.145 77.791 Q 271.617 76.473 274.741 72.302 A 49.482 49.482 0 0 0 275.4 71.4 A 99.393 99.393 0 0 0 278.458 66.822 Q 282.678 60.153 288.5 49.3 Z"
                        id="7"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>
            </svg>
        </motion.div>
    );
};

export default Svanhild;