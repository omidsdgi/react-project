import {Product} from "@/types/Products";
import {Response} from "@/types/Response";
import axios from "axios";
import apiClient from "@/api/config/ApiClient";

interface Props {
    title: string;
    price?: number;
    category: number;
}


export async function getAllProducts():Promise<Response<Product>> {
    let response = await fetch("http://localhost:1337/api/products?populate=*");

    if(response.status === 404){
        throw Error(`Not Found`)
    }

    if (response.status===401){
        throw Error(`Not Authorized`)
    }
    if (response.status===400){
        throw Error(`Not Validation`)
    }

    if (response.status ===403){
        throw Error(`Not Forbidden`)
    }
    return response.json()
}

export async function getProductsOfCategory({categoryId,page}:{categoryId:number,page:number}):Promise<Response<Product>> {

  const response=await apiClient<Response<Product>>({
      method:"GET",
      url:`/products`,
      params:{
          "pagination[page]":page,
          "pagination[pageSize]":25,
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

