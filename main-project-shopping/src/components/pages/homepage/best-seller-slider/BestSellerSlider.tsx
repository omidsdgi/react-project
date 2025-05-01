import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {SimpleProductCard} from "@/components";

interface Props {
    sliderData: Array<any>;
}

export function BestSellerSlider({sliderData}: Props) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={2}
            autoplay={true}
            modules={[Autoplay]}
            breakpoints={ {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 22
                },

            }}
        >
            {
                sliderData.map((slideData,index) => {
                    return (
                        <SwiperSlide key={index}>
                            <SimpleProductCard data={slideData}/>
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    );
}