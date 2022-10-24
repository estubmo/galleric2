import { IImage, IImageFormat, IMAGE_FORMATS, IPainting } from '../model/product';

export const getPaintingImageUrl = (
    painting: IPainting,
    format: IMAGE_FORMATS
): string | undefined => {
    console.log(
        '%cRetNemt%cline:4%cpainting',
        'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
        'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
        'color:#fff;background:rgb(252, 157, 154);padding:3px;border-radius:2px',
        painting
    );

    console.log(
        '%cRetNemt%cline:5%cformat',
        'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
        'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
        'color:#fff;background:rgb(161, 23, 21);padding:3px;border-radius:2px',
        format
    );

    return painting.images.find((x) => x !== undefined)?.formats[format]?.url;
};
