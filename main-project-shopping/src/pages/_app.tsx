import "@/styles/globals.css";
import "@/styles/icon.css";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from "next/app";
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import {NEXT_RSC_UNION_QUERY} from "next/dist/client/components/app-router-headers";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";

const quicksand=Quicksand({
    subsets:['latin']
});

const lato=Lato({
    weight:['100','300'],
    subsets:['latin'],
    variable:'--font-lato'

})

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
                retry:0
            }
        }
    })

    return (
        <>
            <style jsx global>{`
                html{
                    font-family: ${quicksand.style.fontFamily},sans-serif;
                    --font-lato:${lato.style.fontFamily},sans-serif;
                }`}</style>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Component {...pageProps} />
                <ToastContainer autoClose={10000} hideProgressBar={true} draggable={false} position={"top-right"} theme={"light"} closeOnClick={true}/>
                </Layout>
            </QueryClientProvider>
        </>
    )
}
