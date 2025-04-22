import {Product} from "@/types/Products";

export interface Category {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    products: Product;
}