import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import Cart from '../components/Cart';
import ClearCart from '../components/ClearCart';
// import PrintObject from '../components/PrintObject';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ResultPage: NextPage = () => {
    const router = useRouter();

    // Fetch CheckoutSession from static page via
    // https://nextjs.org/docs/basic-features/data-fetching#static-generation
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = useSWR(
        router.query.session_id ? `/api/checkout_sessions/${router.query.session_id}` : null,
        fetcher
    );

    if (error) return <div>failed to load</div>;

    return (
        <div className="page-container">
            <h1>Checkout Payment Result</h1>
            {/* <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2> */}
            <h3>CheckoutSession response:</h3>
            {/* <PrintObject content={data ?? 'loading...'} /> */}
            <Cart>
                <ClearCart />
            </Cart>
        </div>
    );
};

export default ResultPage;
