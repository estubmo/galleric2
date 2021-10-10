import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

interface Props {
    className: string;
}

const AccountButton = ({ className }: Props): JSX.Element => {
    return (
        <svg
            version="1.1"
            id="account_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000"
            strokeWidth="0.25mm"
            className={clsx('fill-current select-none', className)}
            overflow="visible"
            preserveAspectRatio="none">
            <g>
                <path d="M944.9,956C944.9,956,944.9,956,944.9,956c0-4.5-0.9-8.7-2.5-12.6c-28.6-158.9-140.1-288.9-288.4-343c96.3-54,161.4-156.9,161.4-275.1C815.4,151.2,674.2,10,500,10c-174.2,0-315.4,141.2-315.4,315.4c0,118.2,65.1,221.1,161.4,275.1C197,654.8,85.1,785.8,57.2,945.8c-0.8,2.4-1.3,4.9-1.5,7.5c-0.1,0.9-0.4,1.9-0.6,2.8h0.3l0,0c0,18.8,15.2,34,34,34c18.8,0,34-15.2,34-34l0,0h0.1c32-179.2,188.2-315.4,376.6-315.4c0,0,0,0,0,0c0,0,0,0,0,0c188.4,0,344.6,136.2,376.6,315.4h0.4c0,0,0,0,0,0c0,18.7,15.2,33.9,33.9,33.9C929.7,990,944.9,974.8,944.9,956C944.9,956.1,944.9,956.1,944.9,956L944.9,956z M252.2,325.4c0-136.8,110.9-247.8,247.8-247.8c136.8,0,247.8,110.9,247.8,247.8c0,136.8-110.9,247.7-247.7,247.7c0,0,0,0-0.1,0c0,0,0,0-0.1,0C363.1,573.1,252.2,462.2,252.2,325.4z" />
            </g>
        </svg>
    );
};

export default AccountButton;
