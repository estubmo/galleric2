import React from 'react';

import { PageWrapper } from '../components/PageWrapper';
import Stub from '../components/Stub';
import Svanhild from '../components/Svanhild';

const Home = (): JSX.Element => {
    return (
        <PageWrapper className="bg-gray-800">
            <div className="w-full max-w-screen-xl mx-24">
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
        </PageWrapper>
    );
};

export default Home;
