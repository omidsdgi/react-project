import {Category} from "@/types/Category";
import {Response} from "@/types/Response";

export async function getAllCategories():Promise<Response<Category>> {
    let response=await fetch("http://localhost:1337/api/categories?populate=*");
    return response.json();
}