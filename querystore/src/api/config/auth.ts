import apiClient from "@/api/config/ApiClient";

interface LoginData {
    identifier: string;
    password: string;
}

export default async function login({identifier,password}:LoginData) {
const response=await apiClient.post("/auth/local",{identifier,password})
    return response.data
}