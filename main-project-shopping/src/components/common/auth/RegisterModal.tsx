import {Modal} from "@/components";
import React from "react";
import {useForm} from "react-hook-form";
import {Input} from "@/components";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {toast} from "react-toastify";
import {useModal} from "@/store";

interface FormData {
    userName: string;
    password: string;
    email: string;
}

interface Props {
    onClose: () => void
}

export function RegisterModal({onClose,}: Props) {
    const {closeModal} = useModal();
    const {login}=useUser()

    const {register,handleSubmit,formState:{errors}}=useForm<FormData>()

    const mutate=useMutation({mutationFn:registerApiCall})

    const onSubmit=(data:FormData)=>{
        mutate.mutate(data, {onSuccess:(response)=>{
                login(response.jwt, response.user)
                toast.success('با موفقیت وارد حساب کاربری خود شدید')
                closeModal()
            }})

    }

    return (
        <Modal title={'register'} closeModal={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input register={register('userName',   {required: 'لطفا نام خود را وارد نمایید'})} label={'userName'} errors={errors} {...{placeholder:'Enter your username'}}/>
                <Input register={register('email',      {required: 'Please enter your email'})} errors={errors} label={'email'} type={'email'} {...{placeholder:'Enter your username'}}/>
                <Input register={register('password',   {required: 'Please enter your password',minLength: {value: 3, message: 'min 3 characters'},maxLength: {value: 10, message: 'max 10 characters'}})} errors={errors} type={'password'} label={'Password'} {...{placeholder:'Enter your username'}}/>

                <button className={'mt-2 bg-green-400 font-bold py-2 px-4 rounded'}>Submit</button>
            </form>
        </Modal>

    );
}