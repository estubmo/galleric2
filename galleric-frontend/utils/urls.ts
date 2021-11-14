export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
interface IImageProps {
    url: string;
}

export const fromImageToUrl = (image: IImageProps): string => {
    if (image.url.indexOf('/') === 0) {
        return `${API_URL}${image.url}`;
    }
    return image.url;
};
