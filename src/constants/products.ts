import img1 from '../assets/products/book_1/1.jpeg';
import img2 from '../assets/products/book_1/2.jpg';
import img3 from '../assets/products/book_1/3.jpeg';
import userAvatar_1 from '../assets/avatars/user_avatar1.png';
import userAvatar_2 from '../assets/avatars/user_avatar2.png';
import willSmithAvatar from '../assets/avatars/Will_Swith_Avatar.jpg';
import userAvatar_3 from '../assets/avatars/user_avatar3.png';
import userAvatar_batman from '../assets/avatars/user_avatar_batman.jpg';
import { ProductCategory } from '../pages/AddItem';

export interface SellerProps {
    id: string;
    name: string;
    location: string;
    rating: number;
    ecoPoints: number;
    co2Saved: number;
    interests: Array<string>;
    avatar: {
        fallback: string;
        url: any;
    };
    soldProducts: Array<SoldProduct>;
}

export interface ProductProps {
    id: string;
    name: string;
    images: Array<{ id: string; url: any }>;
    cost: number;
    category: ProductCategory;
    timeEnd: number;
    description: string;
    location: string;
    seller: SellerProps;
}

interface SoldProduct {
    id: string;
    name: string;
    images: Array<{ id: string; url: any }>;
    cost: number;
    category: ProductCategory;
    itemCategory: ItemCategory;
    timeEnd: number;
    coSaved: number;
    treesSaved: number;
}

export type ItemCategory = 'bicycle' | 'books' | 'clothes' | 'notebooks';

export const sellers: Array<SellerProps> = [
    {
        id: '1',
        name: 'John Doe',
        location: 'USA, Los Angeles',
        interests: ['swimming', 'books'],
        soldProducts: [],
        avatar: {
            fallback: 'JD',
            url: userAvatar_1,
        },
        rating: 4.8,
        ecoPoints: 20,
        co2Saved: 35,
    },
    {
        id: '2',
        name: 'Will Smith',
        location: 'USA, Los Angeles',
        interests: ['swimming', 'books'],

        soldProducts: [],
        avatar: {
            fallback: 'JD',
            url: willSmithAvatar,
        },
        rating: 5.0,
        ecoPoints: 20,
        co2Saved: 35,
    },
    {
        id: '3',
        name: 'Any name you like',
        location: 'USA, Los Angeles',
        interests: ['swimming', 'books'],

        soldProducts: [],
        avatar: {
            fallback: 'JD',
            url: userAvatar_3,
        },
        rating: 3.2,
        ecoPoints: 20,
        co2Saved: 35,
    },
    {
        id: '3',
        name: 'Bruce Wayne',
        location: 'USA, Los Angeles',
        interests: ['swimming', 'books'],

        soldProducts: [],
        avatar: {
            fallback: 'JD',
            url: userAvatar_batman,
        },
        rating: 5.0,
        ecoPoints: 20,
        co2Saved: 35,
    },
];

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
        category: ProductCategory.WantToBuyAndSell,
        timeEnd: 123,
        description: 'Some description',
        location: 'Los Angeles',
        seller: sellers[0],
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
        category: ProductCategory.WantToBuyAndSell,
        timeEnd: 123,
        description: 'Some description',
        location: 'Los Angeles',
        seller: sellers[1],
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
        seller: sellers[2],
    },
    {
        id: '5',
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
        seller: sellers[3],
    },
];
