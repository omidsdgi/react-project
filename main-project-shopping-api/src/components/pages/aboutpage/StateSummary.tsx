import React from 'react';
import {ImageView} from "@/components";
import Counter from "@/components/pages/aboutpage/Counter";

function StateSummary() {
    return (
        <>
            <div className="relative">
                <ImageView src={'/assets/images/about/business.png'} alt={'business'} height={350} width={1584}/>
                <div className="absolute inset-0 bg-[#4B675A] opacity-80 pointer-events-none rounded-xl"/>
                <div className="absolute inset-0 flex items-center justify-evenly text-white text-4xl font-bold drop-shadow">
                    <Counter targetNumber={12} title={'Glorious years'} />
                    <Counter targetNumber={360} title={'Happy clients'} />
                    <Counter targetNumber={580} title={'Project complete'} />
                    <Counter targetNumber={160} title={'Team adviser'} />
                    <Counter targetNumber={48} title={'Product sale'} />

                </div>
            </div>
        </>
    );
}

export default StateSummary;