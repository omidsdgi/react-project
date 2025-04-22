import {Response} from "@/types/Response";
import {Product} from "@/types/Products";
import {Category} from "@/types/Category";
import { useQueryClient } from "@tanstack/react-query";
import apiClient from "@/api/config/ApiClient";

export async function getProducts():Promise<Response<Product>> {
    let response = await apiClient.get('/products');

    return  response.data();
}
export async function getProductOfCategory({categoryId,page}:{categoryId:number, page:number}):Promise<Response<Product>>{

    const response = await apiClient<Response<Product>>({
        method:"GET",
        url:`/products`,
        params:{
            "pagination[page]":page,
            "pagination[pageSize]":5,
            " filters[category]":categoryId,
            "populate":"*"
        }
    })

    return response.data

}
//     let response=await fetch(`http://localhost:1337/api/products?pagination[pageSize]=5&pagination[page]=${page}&filters[category]=${categoryId}&populate=*`);
//
//     if (response.status === 404)
//         throw Error("not found")
//
//     if (response.status === 401)
//         throw Error("unauthorized")
//
//     if (response.status === 403)
//         throw Error("forbidden")
//
//     return await response.json()
// }

export async function creatProduct({title,price,category}:{title:string,price:number,category:number}):Promise<Response<Product>>{

    const response = await apiClient<Response<Product>>({
        method:"POST",
        url:`/products`,
        data:{
            "data":{
                "title": title,
                "price": price,
                "category": category,
            }
        },
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        }

    })
    return response.data

}
export async function deleteProduct({productId}:{productId:number}){
    const response = await apiClient<Response<Product>>({
        method:"DELETE",
        url: `/products/${productId}`
    })
    return response.data
}
//     const myHeaders = new Headers();
//     myHeaders.append("accept", "application/json");
//     myHeaders.append("Content-Type", "application/json");
//
//     const raw = JSON.stringify({
//         "data": {
//             "title": title,
//             "price": price,
//             "category": category,
//         }
//     });
//
//     const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//     };
//
//     const response= await fetch("http://localhost:1337/api/products", requestOptions)
//
//
//     if (response.status === 404)
//         throw Error("not found")
//
//     if (response.status === 401)
//         throw Error("unauthorized")
//
//     if (response.status === 403)
//         throw Error("forbidden")
//
//     return await response.json()
// }