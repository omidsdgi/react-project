import axios from 'axios'
import {toast} from "react-toastify";
import error = toast.error;

const apiClient= axios.create({
    baseURL:"http://localhost:1337/api",
    timeout:120000,
})

apiClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    console.log("config",config);
    if (token)
        config.headers.Authorization = "Bearer "+token;
    return config;
})

apiClient.interceptors.response.use(function (response){
    return response;
},function (error) {

    if (error.response) {
        if (error.response.status === 404){
            toast.error("منابع درخواستی وجود ندارد.")
        }
        else if (error.response.status === 400){
            toast.error("پارامترهای ارسالی صحیح نمی باشند.")
        }
        else if (error.response.status === 401){
            toast.error("لطفا وارد شوید.")
        }
        else if (error.response.status === 403){
            toast.error("شما دسترسی به این منابع ندارید.")
        }
        else {
            toast.error("خطایی رخ داده است.")
        }


    } else if (error.request) {
        toast.error('ارتباط با سرور برقرار نیست', );

    } else {
        toast.error('خطای نامعلوم', );
    }

    toast.error('error', );



    return Promise.reject(error);
});
export default apiClient
