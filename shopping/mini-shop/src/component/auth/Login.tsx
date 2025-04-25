import { useForm } from "react-hook-form"
import {useMutation} from "@tanstack/react-query";
import {login} from "@/api/auth";
import {toast} from "react-toastify";

interface FormData {
    identifier: string;
    password: string;
}

function Login() {
    const {register,handleSubmit}=useForm<FormData>()


    const mutation=useMutation({mutationFn:login})
    const onSubmitHandler=(data:FormData)=>{
        mutation.mutate(data,{
            onSuccess:(response)=>{
                toast.success("ورود با موفقیت انجام شد")

                localStorage.setItem("token",response.jwt)
            }
        })

    }
    return (
        <form className={"flex flex-col mb-4"} onSubmit={handleSubmit(onSubmitHandler)}>
            <input type={"text"} className={"border-2 border-gray-400 py-2"}
                   {...register("identifier", {required: "username is required"})} placeholder={"username"}/>
            <input type={"password"} className={"border-2 border-gray-400 py-2"}
                   {...register("password", {required: "password is required"})} placeholder={"password"}/>
            <input className={"border-2 border-gray-400 py-2"} type={"submit"} value={"Login"}/>
        </form>
    );
}

export default Login;