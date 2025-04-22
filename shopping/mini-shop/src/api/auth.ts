import apiClient from "@/api/config/ApiClient";

interface FormData {
    identifier: string;
    password: string;
}
export async function login ({identifier,password}:FormData) {
    const response= await apiClient.post("/auth/local",{identifier,password})
    return response.data
}