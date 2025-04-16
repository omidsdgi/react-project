import "@/styles/globals.css";
import type { AppProps } from "next/app";
import  { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient=new QueryClient({defaultOptions:
        {
          queries:
              {
                refetchOnWindowFocus: false,
                refetchIntervalInBackground:false,
              }
        }
  });
  return(
      < QueryClientProvider client={queryClient}>
        <Component {...pageProps} />;
          < ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}
