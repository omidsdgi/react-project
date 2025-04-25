import {ReactNode} from "react";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";

interface Props {
    children: ReactNode;
}

function Layout({children}:Props) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;