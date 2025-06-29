import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ToastContainer} from 'react-toastify';

const queryClient = new QueryClient({defaultOptions:{
        queries:{
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
        }
    }});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient} >
            <Component {...pageProps} />;
            <ToastContainer
                position={"top-right"}
                autoClose={15000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                pauseOnFocusLoss={true}
                closeButton={true}
                draggable={false}
                theme={"light"} />
        </QueryClientProvider>
    )
}
