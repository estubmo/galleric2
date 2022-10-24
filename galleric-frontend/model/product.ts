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
    id: string;
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
    id: string;
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

export interface IStripeProduct {
    /**
     * The name of the product
     */
    name: string;
    /**
     * The description of the product
     */
    description?: string;
    /**
     * A unique product ID
     */
    id: string;
    /**
     * The price of the product
     */
    price: number;
    /**
     * A URL to an image of the product
     */
    image?: string;
    /**
     * The currency of the product
     */
    currency: string;
    /**
     * Values that go into the price_metadata field
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    price_data?: object;
    /**
     * Values that go into the product_metadata field
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    product_data?: object;
    /**
     * Any additional properties
     */
    [propName: string]: any;
}
