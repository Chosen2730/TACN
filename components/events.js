import React, { useRef, useState } from "react";
// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { events } from "../utils/upcoming";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
      >
        <div className='bg-[#01170E] text-white text-center p-4 py-16 transition flex flex-col items-center justify-center my-6'>
          <h2 className='text-3xl'>
            Here is What`s <span className='font-bold'>Happening</span>
          </h2>
          <p className='text-sm text-green-200 capitalize'>
            stay up to date with our programs & events
          </p>
          {events.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  className='w-32 rounded-full h-32 object-cover'
                  alt={"events"}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
}
