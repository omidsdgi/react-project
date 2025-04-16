import {ImageData} from "@/types/Image"

export interface Product {
    title: string;
    description: string;
    price: number;
    sale_price: number;
    createdAt: string;
    updatedAt: string;
    image?: ImageData;
}