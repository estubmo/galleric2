import axios from 'axios';
import { GetStaticProps } from 'next';
import React from 'react';

import Background from '../components/Background';
import FooterComponent from '../components/FooterComponent';
import MonochromeCollectionComponent from '../components/MonochromeCollectionComponent';
import MoroccoCollectionComponent from '../components/MoroccoCollectionComponent';
import { PageWrapper } from '../components/PageWrapper';
import WelcomeComponent from '../components/WelcomeComponent';
import { IImage } from '../model/product';
import { API_URL } from '../utils/urls';

interface IFrontpageData {
    frontpageData: {
        wallpaper: {
            url: string;
        };
        sig: {
            url: string;
        };
        stamp: {
            url: string;
        };
        collections: [
            {
                id: number;
                title: string;
                images: Array<IImage>;
            }
        ];
    };
}

const IndexPage = ({ frontpageData }: IFrontpageData): JSX.Element => {
    const moroccoCollection = frontpageData.collections.find((c) => c.title === 'morocco');
    const monochromeCollection = frontpageData.collections.find((c) => c.title === 'monochrome');

    return (
        <div className="flex flex-col w-full max-h-full">
            <WelcomeComponent
                wallpaperUrl={frontpageData.wallpaper.url}
                sigUrl={frontpageData.sig.url}
                stampUrl={frontpageData.stamp.url}
            />
            <div className="h-screen"></div>
            <Background colorFrom="#ECE4D4" colorTo="#A2A2A4">
                {moroccoCollection && <MoroccoCollectionComponent collection={moroccoCollection} />}

                {monochromeCollection && (
                    <MonochromeCollectionComponent collection={monochromeCollection} />
                )}
                {monochromeCollection && (
                    <FooterComponent wallpaperUrl={monochromeCollection?.images[3].url} />
                )}
            </Background>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get(`${API_URL}/frontpage/`);
    const frontpageData = res.data;

    return { props: { frontpageData }, revalidate: 3600 };
};

export default IndexPage;
