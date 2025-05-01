import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductDealsCard, ProductVerticalList, SimpleProductCard} from "@/components";
import {TopSellingMock} from "@/mock/TopSelling";
import {trendingProductsMock} from "@/mock/TrendingProducts";
import {RecentlyAddedMock} from "@/mock/RecentlyAdded";
import {topRatedMock} from "@/mock/TopRated";

interface Props {
    
}

export function BottomSlider({}: Props) {
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
                            <ProductVerticalList title={'TopSelling'} data={TopSellingMock}/>
                        </SwiperSlide>

            <SwiperSlide >
                <ProductVerticalList title={'Trending Products'} data={trendingProductsMock}/>
            </SwiperSlide>

            <SwiperSlide >
                <ProductVerticalList title={'Recently Added'} data={RecentlyAddedMock}/>
            </SwiperSlide>

            <SwiperSlide >
                <ProductVerticalList title={'Top Rated'} data={topRatedMock}/>
            </SwiperSlide>



        </Swiper>
    );
}