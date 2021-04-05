import React from 'react';

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    content: object;
};

const PrintObject = ({ content }: Props): JSX.Element => {
    const formattedContent: string = JSON.stringify(content, null, 2);
    return <pre>{formattedContent}</pre>;
};

export default PrintObject;
