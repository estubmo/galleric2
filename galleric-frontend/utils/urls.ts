import { IImage, IMAGE_FORMATS } from '../model/product';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const fromImageToUrl = (image: IImage, format: IMAGE_FORMATS): string => {
    if (image.url.indexOf('/') === 0) {
        return `${API_URL}${image.formats[format].url}`;
    }

    return image.formats[format].url;
};
