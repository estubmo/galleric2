import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { SignUpSignIn } from '../components/SignUpSignIn/SignUpSignIn';

const Sign: NextPage = () => {
    const router = useRouter();
    const { query } = router;

    return <SignUpSignIn sign={query.sign || 'in'} />;
};

export default Sign;
