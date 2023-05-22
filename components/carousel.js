import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import events from "@/contents/events";

import "swiper/css";
import "swiper/css/pagination";
import Card1 from "./card";

export default function Carousel() {
  

  return (
    <>
      <Swiper
        loop={true}
        autoplay={true}
        slidesPerView={2.3}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper w-[70vw]"
      >
        {events.map((event, key) => {
          return (
            <SwiperSlide key={event.key}>
              <Card1
                name={event.name}
                des={event.des}
                img={event.img}
                date={event.date}
                link={event.link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
