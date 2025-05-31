 import React from "react";
 import {twMerge} from "tailwind-merge";
 import {Banner} from "@/components";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export function Section({className='',children}: Props) {
    return (
       <section className={'container'}>
           {children}
       </section>
    );
}