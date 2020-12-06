import img1 from '../assets/products/book_1/1.jpeg';
import img2 from '../assets/products/book_1/2.jpg';
import img3 from '../assets/products/book_1/3.jpeg';
import userAvatar from '../assets/products/book_1/user_avatar.png';
import { ProductCategory } from '../pages/AddItem';

export interface ProductProps {
    id: string;
    name: string;
    images: Array<{ id: string; url: any }>;
    cost: number;
    category: ProductCategory.WantToSellSomeday;
    timeEnd: number;
    description: string;
    location: string;
    avatar: {
        fallback: string;
        url: any;
    };
    userRating: number;
}

export const products: Array<ProductProps> = [
    {
        id: '1',
        name: 'The free People ',
        images: [
            {
                id: '1',
                url: img1,
            },
            {
                id: '2',
                url: img2,
            },
            {
                id: '3',
                url: img3,
            },
        ],
        cost: 199.89,
        category: ProductCategory.WantToSellSomeday,
        timeEnd: 123,
        description: 'Some description',
        location: 'Los Angeles',
        avatar: {
            fallback: 'JD',
            url: userAvatar,
        },
        userRating: 5.0,
    },
    {
        id: '2',
        name: 'The free People ',
        images: [
            {
                id: '1',
                url: img1,
            },
            {
                id: '2',
                url: img2,
            },
            {
                id: '3',
                url: img3,
            },
        ],
        cost: 199.89,
        category: ProductCategory.WantToSellSomeday,
        timeEnd: 123,
        description: 'Some description',
        location: 'Los Angeles',
        avatar: {
            fallback: 'SM',
            url: userAvatar,
        },
        userRating: 5.0,
    },
    {
        id: '3',
        name: 'The free People ',
        images: [
            {
                id: '1',
                url: img1,
            },
            {
                id: '2',
                url: img2,
            },
            {
                id: '3',
                url: img3,
            },
        ],
        cost: 199.89,
        category: ProductCategory.WantToSellSomeday,
        timeEnd: 123,
        description: 'Some description',
        location: 'Los Angeles',
        avatar: {
            fallback: 'SM',
            url: userAvatar,
        },
        userRating: 5.0,
    },
    {
        id: '4',
        name: 'The free People ',
        images: [
            {
                id: '1',
                url: img1,
            },
            {
                id: '2',
                url: img2,
            },
            {
                id: '3',
                url: img3,
            },
        ],
        cost: 199.89,
        category: ProductCategory.WantToSellSomeday,
        timeEnd: 123,
        description: 'Some description',
        location: 'Los Angeles',
        avatar: {
            fallback: 'SM',
            url: userAvatar,
        },
        userRating: 5.0,
    },
];
