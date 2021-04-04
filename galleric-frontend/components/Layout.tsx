import React, { ReactNode } from 'react';

import NavBar from './NavBar';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <NavBar />
            <div className="text-gray-100 font-sans bg-gray-900">{children}</div>
        </>
    );
};

export default Layout;
