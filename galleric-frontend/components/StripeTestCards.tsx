const StripeTestCards = (): JSX.Element => {
    return (
        <div className="test-card-notice">
            Use any of the{' '}
            <a
                href="https://stripe.com/docs/testing#cards"
                target="_blank"
                rel="noopener noreferrer">
                Stripe test cards
            </a>{' '}
            for this demo, e.g.{' '}
            <div className="inline-block text-gray-500 font-mono">4242 4242 4242 4242</div>.
        </div>
    );
};

export default StripeTestCards;
