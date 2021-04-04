import { NextPage } from 'next';
import React from 'react';

import { SignUpSignIn } from '../components/SignUpSignIn/SignUpSignIn';

const SignUp: NextPage = () => {
    return <SignUpSignIn sign="up" />;
};

export default SignUp;
