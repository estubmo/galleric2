import IUser from '../types/user';

export enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    NOK = 'NOK'
}

export interface IImage {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    url: string;
    formats: IImageFormat;
}

export interface IImageFormat {
    thumbnail: IImageSizeFormat;
    small: IImageSizeFormat;
    medium: IImageSizeFormat;
    large: IImageSizeFormat;
}

export interface IImageSizeFormat {
    name: string;
    ext: string;
    hash: string;
    height: number;
    width: number;
    size: number;
    url: string;
    mine: string;
}

export enum IMAGE_FORMATS {
    THUMBNAIL = 'thumbnail',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

export interface IProduct {
    name: string;
    price: number;
    slug: string;
    currency: Currency;
    orders?: IOrder;
    painting?: IPainting;
    print?: IPrint;
    course?: ICourse;
}
export interface IPainting {
    name: string;
    images: Array<IImage>;
    content: string;
    meta_description: string;
    meta_title: string;
    price: number;
    slug: string;
    print?: IPrint;
    product?: IProduct;
}
export interface IPrint {
    name: string;
    painting?: IPainting;
    product?: IProduct;
}
export interface IOrder {
    status: string;
    total: number;
    checkout_sessions: string;
    user?: IUser;
    product?: IProduct;
}

export interface ICourse {
    name: string;
    content: string;
    duration: number;
    product?: IProduct;
}

export interface IProducts {
    products: Array<IProduct>;
}
export interface IPaintings {
    paintings: Array<IPainting>;
}
