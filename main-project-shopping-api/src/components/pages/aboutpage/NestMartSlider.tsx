import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {IconBox, ImageView} from "@/components";

export function NestMartSlider() {
    return (
        <div className="relative max-w-[615px] w-full mx-auto">
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3000 }}
                loop
                navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    640:  { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                className="w-full"
            >
                {[6,7,8,9].map((n) => (
                    <SwiperSlide key={n}>
                        <div className="h-[224px] flex items-center justify-center bg-gray-100 rounded">
                            <ImageView
                                src={`/assets/images/about/Rectangle 2${n}.png`}
                                alt={`nest mart ${n}`}
                                width={182}
                                height={224}
                                className="object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* prev / next */}
            <button
                className="swiper-prev absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10
                   p-2 bg-white/80 backdrop-blur rounded-full shadow hover:bg-green-200
                   hidden sm:flex"
                aria-label="قبلی"
            >
                <IconBox icon="icon-angle-small-left text-gray-600" size={24} />
            </button>

            <button
                className="swiper-next absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10
                   p-2 bg-white/80 backdrop-blur rounded-full shadow hover:bg-green-200
                   hidden sm:flex"
                aria-label="بعدی"
            >
                <IconBox icon="icon-angle-small-right text-gray-600" size={24} />
            </button>
        </div>
    );
}