import "@/styles/globals.css";
import "@/styles/icon.css";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import type { AppProps } from "next/app";
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";

const quicksand=Quicksand({
    subsets:['latin']
});

const lato=Lato({
    weight:['100','300'],
    subsets:['latin'],
    variable:'--font-lato'

})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
      <style jsx global>{`
      html{
          font-family: ${quicksand.style.fontFamily},sans-serif;
          --font-lato:${lato.style.fontFamily},sans-serif;
      }`}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
  )}
