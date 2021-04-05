import { motion } from 'framer-motion';
import React from 'react';

import Stub from '../components/Stub';
import Svanhild from '../components/Svanhild';

const Home = (): JSX.Element => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1
                }
            }}
            className="flex flex-col items-center justify-center w-full h-auto bg-gray-900">
            <div className="mx-24 w-full max-w-screen-xl">
                <div className="flex flex-col">
                    <div className="relative">
                        <Svanhild
                            containerClassName="left-0 top-0 p-4 text-gray-100 absolute"
                            svgClassName="h-6 md:h-10 fill-current stroke-current"
                        />
                        <Stub
                            containerClassName="left-0 top-8 p-4 text-gray-100 absolute"
                            svgClassName="h-6 md:h-10 fill-current stroke-current"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-screen bg-green-800"></div>
            <div className="w-full h-screen bg-blue-800"></div>
            <div className="w-full h-screen bg-blue-800"></div>
        </motion.div>
    );
};

export default Home;
