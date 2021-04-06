import { motion } from 'framer-motion';
import React from 'react';

const SoldArt = (): JSX.Element => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1
                }
            }}
            className="flex justify-center pb-32 bg-gradient-to-br from-gray-900 to-gray-800 via-gray-700">
            {/* <div className="flex flex-col items-center justify-center">
                <div className="mt-32 w-36 h-36 bg-gray-900 transform-gpu hover:-translate-y-1 hover:scale-110 transition"></div>
            </div> */}

            <div className="grid gap-4 grid-cols-3">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </div>
        </motion.div>
    );
};

export default SoldArt;
