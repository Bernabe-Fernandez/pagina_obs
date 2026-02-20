import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules";

import CardSliderProducto from '../Cards/Home/CardSliderProducto'
import { ProductosCards } from "../../data/productosCard";

export default function SliderProductos() {
  return (
    <>
        <div className="w-full px-10 py-16 bg-gray-100">
          <h2 className="text-center text-3xl font-semibold text-blue-800 mb-10">
            PRODUCTOS DESTACADOS
          </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
            {ProductosCards.map((item, index) => (
              <SwiperSlide key={index}>
                <CardSliderProducto {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

    </>
  )
}
