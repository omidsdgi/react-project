export interface ImageData {
    data:Data
}
interface Data {
    id: number;
    attributes:Image
}

interface Image {
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats:string;
    hash:string;
    ext:string;
    mime:string;
    size:string;
    url:string;
    previewUrl:string;
    provider:string;
    provider_metadata:any;
    createdAt:string;
    updatedAt:string
}

