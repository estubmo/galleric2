import { NextPage } from 'next';
import React from 'react';

import { SignUpSignIn } from '../components/SignUpSignIn/SignUpSignIn';

const SignIn: NextPage = () => {
    return <SignUpSignIn sign="in" />;
};

export default SignIn;
