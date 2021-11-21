import React, { ReactNode } from 'react';

import NavBar from './NavBar';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <NavBar />
            <div className="flex justify-center w-full font-sans text-gray-100 bg-gray-900">
                {children}
            </div>
        </>
    );
};

export default Layout;
