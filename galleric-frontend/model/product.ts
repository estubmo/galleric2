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
