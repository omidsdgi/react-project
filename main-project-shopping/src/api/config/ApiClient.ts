import axios from "axios";
import {toast} from "react-toastify";


const apiClient=axios.create({
    baseURL: "http://nest.navaxcollege.com/api",
    timeout: 120000,
})

apiClient.interceptors.response.use(function (response){
    return response.data;

},function (error) {
    if (error.response){
        toast.error('منابع درخواستی وجود ندارد');
    }
    else if (error.response.status == 404){
        toast.error('منابع درخواستی وجود ندارد. ')
    }
    else if(error.response.status == 400){
        toast.error('پارامترهای ارسالی صحیح نمی باشد.')
    }
    else if(error.response.status == 401){
        toast.error('لطفا وارد شوید.')
    }
    else if(error.response.status == 403){
        toast.error('شما دسترسی به این منابع ندارید.')
    }
    else {
        toast.error('خطای نامعلوم.')
    }
})
export default apiClient