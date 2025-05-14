import apiClient from "@/api/config/ApiClient";
import {RegisterResponseType} from "@/types/api/Auth";

interface Data {
    userName: string;
    password: string;
    email: string;
}

export function registerApiCall(data:Data):Promise<RegisterResponseType> {
    return apiClient.post('/auth/local/register',data)
}