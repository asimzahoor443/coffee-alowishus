'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CafePic from '@/public/assests/cafe.png';
import { Button } from '@/components/ui/button';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

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
                <div className="relative">
                  {/***** ******/}
                  <h1 className="text-7xl font-bold py-4">
                    Alowishus Delicious Coffee
                    <div className="absolute top-40 right-44">
                      <Image
                        // src="/public/assests/cafe.png"
                        src={CafePic}
                        width={80}
                        height={80}
                        alt="cafe image"
                      />
                    </div>
                  </h1>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, suscipit ipsam! Ut, in! Ea dolor quos amet
                    maiores id quasi!
                  </p>
                  {/***** ******/}
                  <div className="flex gap-4 py-6">
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                      Download App
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                    >
                      Shop Coffee
                    </Button>
                  </div>
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
