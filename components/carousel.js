import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import Card from "./card";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={2.3}
        // spaceBetween={}
        modules={[Pagination]}
        className="mySwiper w-[70vw]"
      >
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
      </Swiper>
    </>
  );
}
