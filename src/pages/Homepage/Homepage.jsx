import Sidebar from "../../components/Sidebar/Sidebar";
import Navbarcomp from "../../components/Navbar/Navbar";
import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Homepage.scss";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const Homepage = () => {
  return (
    <>
      <Sidebar />
      <Navbarcomp />
      <main className=' z-0 lg:pl-64 h-screen'>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                "url(https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_1280.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
            <h5 className='text-font-title font-black'>ARTWORKs</h5>
            </div>
            {/* <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div> */}
            <div className="text" data-swiper-parallax="-100">
              <p className="text-font-four text-lg">
                Click here to see my artworks
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              <h5 className="text-font-title-two">SKETCHES & ROUGHWORKS</h5>
            </div>
            {/* <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div> */}
            <div className="text" data-swiper-parallax="-100">
              <p className="text-font-four text-lg">
                Click here to see what i do with my free time
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              <h5 className='text-font-title-three'>DiIGITAL PAINTINGS</h5>
            </div>
            {/* <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div> */}
            <div className="text" data-swiper-parallax="-100">
              <p className="text-font-four text-lg">
                Click here to see my digital paintings
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
};

export default Homepage;