import React from 'react';
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import login from "@/api/config/auth";
import {toast} from "react-toastify";
import { TextField, Button, Box } from "@mui/material";

interface FormData {
    identifier: string;
    password: string;
}

function Login() {
    const{register,handleSubmit,formState:{errors}}=useForm<FormData>()

    const mutation=useMutation({mutationFn:login})
    const onSubmitHandler = (data:FormData)=>{
        mutation.mutate(data,{
            onSuccess: (response)=>{
                toast.success("ورود با موفقیت انجام شد")
                localStorage.setItem("token",response.jwt)
            }
        })
    }
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
            >
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmitHandler)}
            sx={{ display: "flex", flexDirection: "column", gap: 2, width: "300px" }}
        >
            <TextField
                label="Username"
                variant="outlined"
                {...register("identifier", { required: "Username is required" })}
                error={!!errors.identifier}
                helperText={errors.identifier?.message}
                fullWidth
            />

            <TextField
                label="Password"
                variant="outlined"
                type="password"
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
        </Box>
        </Box>
    );
}

export default Login;