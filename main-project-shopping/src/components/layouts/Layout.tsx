import {ReactNode} from "react";
import {Footer} from "@/components";
import {Header} from "@/components";

interface Props {
    children: ReactNode;
}

export function Layout({children}:Props) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

