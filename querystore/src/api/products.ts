import {Product} from "@/types/Products";
import {Response} from "@/types/Response";
import apiClient from "@/api/config/ApiClient";

interface Props {
    title: string;
    price?: number;
    category: number;
}


export async function getAllProducts():Promise<Response<Product>> {
    const response = await apiClient.get("/products")
   return response.data;
}

export async function deleteProduct({productId}:{productId:number}) {
    const response = await apiClient.delete(`/products/${productId}`);
    console.log('delete', response);
    return response.data;
}

export async function getProductsOfCategory({categoryId,page}:{categoryId:number,page:number}):Promise<Response<Product>> {

  const response=await apiClient<Response<Product>>({
      method:"GET",
      url:`/products`,
      params:{
          "pagination[page]":page,
          "pagination[pageSize]":5,
          "filters[category]":categoryId,
          "populate":"*"
      }
  })
    return response.data
    }

export async function createProduct({title,price,category}:Props):Promise<Response<Product>> {

     const response=await apiClient<Response<Product>>({
          method:"POST",
          url:"/products",
          data:{
              data: {
                  "title":title,
                  "price": price,
                  "category": category
              }
          }
      })
    return response.data
}

