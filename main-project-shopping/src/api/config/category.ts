import apiClient from "@/api/config/ApiClient";
import {ApiResponseType} from "@/types";
import {CategoryTpye} from "@/types/api/Category";

export  function getFeaturedCategory():Promise<ApiResponseType<CategoryTpye>> {
 return  apiClient.get('/categories',{
        params:{
            populate:'thumbnail',
            filters:{
                is_featured:{
                    $eq:true,
                },
            },
        }
    })

}