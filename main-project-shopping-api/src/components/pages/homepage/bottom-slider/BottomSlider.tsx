import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductDealsCard, ProductVerticalList, SimpleProductCard} from "@/components";
import {RecentlyAddedMock} from "@/mock/RecentlyAdded";
import {useQuery} from "@tanstack/react-query";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {getAllProductsApiCall} from "@/api/prodoct";
import {InView} from "react-intersection-observer";
import entry from "next/dist/server/typescript/rules/entry";
import {refreshReducer} from "next/dist/client/components/router-reducer/reducers/refresh-reducer";

interface Props {

}

export function BottomSlider({}: Props) {
    const {data:topRateData, refetch}=useQuery<ApiResponseType<ProductType>>({
        queryKey:[getAllProductsApiCall.name,'topRate'],
        queryFn:()=>getAllProductsApiCall(
            {
                populate:['thumbnail'],
                sort:["rate:desc"],
                pagination:{
                    page:1,
                    pageSize:3,
                    withCount:false,
                }
            }),
        enabled:false
    })
    const {data: topSellingProduct}=useQuery<ApiResponseType<ProductType>>({
        queryKey:[getAllProductsApiCall.name,'top_selling_Product'],
        queryFn:()=>
            getAllProductsApiCall({populate:['categories','thumbnail'],filters: {is_top_selling: {$eq:true}}})})


    const {data: trendingProduct}=useQuery<ApiResponseType<ProductType>>({
        queryKey:[getAllProductsApiCall.name,'trending_Product'],
        queryFn:()=>
            getAllProductsApiCall({populate:['categories','thumbnail'],filters: {is_trending: {$eq:true}}})})


        const {data:RecentlyAdd}=useQuery<ApiResponseType<ProductType>>({
            queryKey:[getAllProductsApiCall.name,'recentlyAdd'],
            queryFn:()=>getAllProductsApiCall(
                {
                    populate:['thumbnail'],
                    sort:["id:desc"],
                    pagination:{
                        page:1,
                        pageSize:3,
                        withCount:false,
                    }
                }),
        })

    console.log("top rate",topRateData);
    console.log("top selling",topSellingProduct);
    console.log("trending Product",trendingProduct);
    console.log("Recently Add",RecentlyAdd);

    return (

        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay]}
            breakpoints={ {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 22
                },

            }}
        >


            <SwiperSlide >

                {topSellingProduct && <ProductVerticalList title={'TopSelling'} data={topSellingProduct.data}/>}
            </SwiperSlide>

            <SwiperSlide >
                {trendingProduct && <ProductVerticalList title={'Trending Products'} data={trendingProduct.data}/>}
            </SwiperSlide>

            <SwiperSlide >
                {RecentlyAdd &&<ProductVerticalList title={'Recently Added'} data={RecentlyAdd.data}/>}
            </SwiperSlide>
            <SwiperSlide >
            <InView as='div' onChange={(inView,entry)=>inView && refetch()}>
                {topRateData &&<ProductVerticalList title={'Top Rated'} data={topRateData.data}/>}
        </InView>
            </SwiperSlide>

        </Swiper>
    );
}