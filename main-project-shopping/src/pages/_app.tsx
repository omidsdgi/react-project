import "@/styles/globals.css";
import "@/styles/icon.css";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from "next/app";
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import {HydrationBoundary, QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import React, {useState} from "react";
import {ModalContextProvider} from "@/store";
import {AuthContextProvider} from "@/store/AuthContext";
import {BasketContextProvider} from "@/store/basketContext";

const quicksand=Quicksand({
    subsets:['latin']
});

const lato=Lato({
    weight:['100','300'],
    subsets:['latin'],
    variable:'--font-lato'

})

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(()=>new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
                retry:0,
                staleTime:60*1000
            }
        }
    }))

    return (
        <>
            <style jsx global>{`
                html{
                    font-family: ${quicksand.style.fontFamily},sans-serif;
                    --font-lato:${lato.style.fontFamily},sans-serif;
                }`}</style>
            <QueryClientProvider client={queryClient}>
                <BasketContextProvider>
                    <HydrationBoundary state={pageProps.dehydratedState}>
                        <AuthContextProvider>
                            <ModalContextProvider>
                                <div id={'portal'}></div>
                                <Layout>
                                    <Component {...pageProps} />
                                    <ToastContainer autoClose={10000} hideProgressBar={true} draggable={false} position={"top-right"} theme={"light"} closeOnClick={true}/>
                                </Layout>
                            </ModalContextProvider>
                        </AuthContextProvider>
                    </HydrationBoundary>
                </BasketContextProvider>
            </QueryClientProvider>
        </>
    )
}
