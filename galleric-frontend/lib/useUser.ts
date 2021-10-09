import axios from 'axios';
import Router from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

import IUser from '../types/user';

interface IUseUser {
    user: IUser | undefined;
    mutateUser: (data?: any, shouldRevalidate?: boolean | undefined) => Promise<any>;
    isValidating: boolean;
}

interface IProps {
    redirectTo?: string;
    redirectAs?: string;
    redirectIfFound?: boolean;
}

const defaultProps: IProps = {
    redirectTo: '',
    redirectAs: '',
    redirectIfFound: false
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function useUser({
    redirectTo,
    redirectAs = redirectTo,
    redirectIfFound
} = defaultProps): IUseUser {
    const { data: user, mutate: mutateUser, isValidating } = useSWR('/api/user', fetcher);

    useEffect(() => {
        if (!redirectTo) {
            return;
        }

        if ((redirectTo && !redirectIfFound && !user) || (redirectTo && redirectIfFound && user)) {
            Router.push(redirectTo, redirectAs);
        }
    }, [user, redirectAs, redirectIfFound, redirectTo]);

    return { user, mutateUser, isValidating };
}
