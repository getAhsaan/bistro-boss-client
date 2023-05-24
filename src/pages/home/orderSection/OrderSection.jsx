import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const OrderSection = () => {
  return (
    <div className=" md:mt-20">
      <SectionHeader subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}></SectionHeader>
      <div className="my-10 w-full mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img
              src={slide1}
              alt="slide1"
              className="w-full"
            />
            <h3 className="text-white -mt-16 text-center md:text-3xl me-16  uppercase">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide2}
              alt="slide2"
              className="w-full"
            />
            <h3 className="text-white -mt-16 text-center md:text-3xl me-16 uppercase">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide3}
              alt="slide3"
              className="w-full"
            />
            <h3 className="text-white -mt-16 text-center md:text-3xl me-16 uppercase">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide4}
              alt="slide4"
              className="w-full"
            />
            <h3 className="text-white -mt-16 text-center md:text-3xl me-16 uppercase">
              Desserts
            </h3>
          </SwiperSlide>

          <SwiperSlide className="mb-20">
            <img
              src={slide5}
              alt="slide5"
              className="w-full"
            />
            <h3 className="text-white -mt-16 text-center md:text-3xl me-16 uppercase">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderSection;
