import { IImage, IMAGE_FORMATS } from '../model/product';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const fromImageToUrl = (image: IImage, format: IMAGE_FORMATS): string => {
    console.log(
        '%cRetNemt%cline:5%cformat',
        'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
        'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
        'color:#fff;background:rgb(39, 72, 98);padding:3px;border-radius:2px',
        format
    );
    console.log(
        '%cRetNemt%cline:5%cimage',
        'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
        'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
        'color:#fff;background:rgb(251, 178, 23);padding:3px;border-radius:2px',
        image
    );

    console.log(
        '%cRetNemt%cline:21%cimage.formats[format].url',
        'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
        'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
        'color:#fff;background:rgb(178, 190, 126);padding:3px;border-radius:2px',
        image.formats[format].url
    );

    if (image.url.indexOf('/') === 0) {
        return `${API_URL}${image.formats[format].url}`;
    }
    return image.url;
};
