import img1 from '../assets/products/book_1/1.jpeg';
import img2 from '../assets/products/book_1/2.jpg';
import img3 from '../assets/products/book_1/3.jpeg';

import book_2_1 from '../assets/products/book_2/book_2_1.jpg';
import book_2_2 from '../assets/products/book_2/book_2_2.jpeg';

import suit_1 from '../assets/products/clothes/suit_1/suit_1.jpg';
import suit_2 from '../assets/products/clothes/suit_1/suit_2.jpg';

import watch_1 from '../assets/products/luxury/watch_1.jpg';

import mac_1 from '../assets/products/macbookPro/mac_1.jpg';
import mac_2 from '../assets/products/macbookPro/mac_2.jpeg';
import mac_3 from '../assets/products/macbookPro/mac_3.jpg';

import userAvatar_1 from '../assets/avatars/user_avatar1.png';
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
    productCategory: string;
    productSubCategory: string;
    timeEnd: number;
    description: string;
    location: string;
    co2PollutionPerYear: number;
    treesSaved: number;
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
        id: '4',
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
        name: 'Armani suit',
        images: [
            {
                id: '1',
                url: suit_1,
            },
            {
                id: '2',
                url: suit_2,
            },
        ],
        cost: 2030.29,
        co2PollutionPerYear: 576,
        treesSaved: 2,
        category: ProductCategory.WantToBuyAndSell,
        productCategory: 'Clothes',
        productSubCategory: 'Suits',
        timeEnd: 123,
        description: 'Awesome suit',
        location: 'New York',
        seller: sellers[1],
    },
    {
        id: '2',
        name: 'TAG HEUER',
        images: [
            {
                id: '1',
                url: watch_1,
            },
        ],
        cost: 28040.44,
        co2PollutionPerYear: 29,
        treesSaved: 1,
        category: ProductCategory.WantToBuyAndSell,
        productCategory: 'Luxury',
        productSubCategory: 'Watches',
        timeEnd: 123,
        description: 'Awesome watch',
        location: 'Paris',
        seller: sellers[0],
    },
    {
        id: '3',
        name: 'Design book',
        images: [
            {
                id: '1',
                url: book_2_1,
            },
            {
                id: '2',
                url: book_2_2,
            },
        ],
        cost: 32.65,
        co2PollutionPerYear: 193,
        treesSaved: 12,
        category: ProductCategory.WantToSellSomeday,
        productCategory: 'Literature',

        productSubCategory: 'Books',
        timeEnd: 123,
        description: 'Some description',
        location: 'Los Angeles',
        seller: sellers[2],
    },
    {
        id: '4',
        name: 'MacBook Pro',
        images: [
            {
                id: '1',
                url: mac_1,
            },
            {
                id: '2',
                url: mac_2,
            },
            {
                id: '3',
                url: mac_3,
            },
        ],
        cost: 5000,
        co2PollutionPerYear: 2983,
        treesSaved: 4,
        category: ProductCategory.WantToSellSomeday,
        productCategory: 'Сomp. equip',
        productSubCategory: 'Notebooks',
        timeEnd: 123,
        description: 'Awesome note',
        location: 'Zhmerynka',
        seller: sellers[3],
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
        co2PollutionPerYear: 142,
        treesSaved: 32,
        category: ProductCategory.CurrentlySelling,
        productCategory: 'Literature',

        productSubCategory: 'Books',

        timeEnd: 123,
        description: 'Some description',
        location: 'Los Angeles',
        seller: sellers[2],
    },
    {
        id: '6',
        name: 'Some name',
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
        co2PollutionPerYear: 142,
        treesSaved: 17,
        category: ProductCategory.CurrentlySelling,
        productCategory: 'Literature',

        productSubCategory: 'Books',

        timeEnd: 123,
        description: 'Some description',
        location: 'Los Angeles',
        seller: sellers[3],
    },
];
