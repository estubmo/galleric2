import { IMAGE_FORMATS, IProduct, IStripeProduct } from '../model/product';
import { formatPriceForStripe } from './currency';
import { getPaintingImageUrl } from './image';

export const marshalProductToStripe = (product: IProduct): IStripeProduct => {
    return {
        ...product,
        id: product.id.toString(),
        price: formatPriceForStripe(product.price),
        image: product.painting && getPaintingImageUrl(product?.painting, IMAGE_FORMATS.THUMBNAIL)
    };
};

// const marshalToStrapi = (product: IStripeProduct): IProduct => {};

// export interface IProduct {
//     id: string;
//     name: string;
//     price: number;
//     slug: string;
//     currency: Currency;
//     orders?: IOrder;
//     painting?: IPainting;
//     print?: IPrint;
//     course?: ICourse;
// }
