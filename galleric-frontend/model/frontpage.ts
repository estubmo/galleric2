import { IImage } from './product';

export interface ISlideComponent {
    collection: {
        id: number;
        title: string;
        images: Array<IImage>;
    };
}
