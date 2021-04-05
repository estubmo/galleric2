// export interface IProduct {
//     name: string;
//     description: string;
//     sku: string;
//     price: number;
//     image: string;
//     attribution: string;
//     currency: string;
// }

// export interface IProductX extends Omit<IProduct, 'description'> {
//     description?: undefined;
// }

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
    images: Array<IImage>;
    content: string;
    meta_description: string;
    meta_title: string;
    price: number;
    slug: string;
    currency: Currency;
}

export interface IProducts {
    products: Array<IProduct>;
}
