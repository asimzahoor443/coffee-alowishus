'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 300000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container">
              {/***** ******/}
              <div className="grid grid-cols-2">
                {/***** ******/}
                <div className="">
                  <div className="h1"></div>
                  <p></p>
                  {/***** ******/}
                  <di className="">
                    <button></button>
                    <button></button>
                  </di>
                </div>
                {/***** ******/}
                <div className="">ErickTrump</div>
              </div>
              {/***** ******/}
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
