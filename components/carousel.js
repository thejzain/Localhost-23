import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import Card1 from "./card";

export default function Carousel() {
  return (
    <>
      <Swiper
        loop
        slidesPerView={2.3}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper w-[70vw]"
      >
        <SwiperSlide>
          <Card1 />
        </SwiperSlide>
        <SwiperSlide>
          <Card1 />
        </SwiperSlide>
        <SwiperSlide>
          <Card1 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
