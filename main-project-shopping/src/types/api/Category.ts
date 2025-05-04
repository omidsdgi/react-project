import {EntityType} from "@/types";
import {ImageType} from "@/types/api/image";

export interface CategoryTpye {
    title: string
    description: any
    slug: string
    is_featured: boolean
    icon_name: any
    color?: string
    product_count?: number
    link?: string
    thumbnail: {
        data?: EntityType<ImageType>
    }
}