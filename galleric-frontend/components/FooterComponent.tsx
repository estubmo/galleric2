import Image from 'next/image';
import React from 'react';

interface IFooterComponent {
    wallpaperUrl: string;
}

const FooterComponent = ({ wallpaperUrl }: IFooterComponent): JSX.Element => {
    return (
        <div className="relative flex justify-center w-full h-screen max-h-screen overflow-hidden min-h-156">
            {wallpaperUrl && (
                <Image
                    src={wallpaperUrl}
                    className="select-none"
                    alt="Background image"
                    layout="fill"
                    objectFit="cover"
                />
            )}
        </div>
    );
};

export default FooterComponent;
