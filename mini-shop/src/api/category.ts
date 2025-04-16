import {Response} from "@/types/Response";
import {Category} from "@/types/Category";
import {Product} from "@/types/Products";

export async function getCategories():Promise<Response<Category>>{
    let response=await fetch('http://localhost:1337/api/categories?populate=*');
   if (response.status === 404)
       throw Error("not found")

    if (response.status === 401)
       throw Error("unauthorized")

    if (response.status === 403)
       throw Error("forbidden")

    return await response.json()
}
