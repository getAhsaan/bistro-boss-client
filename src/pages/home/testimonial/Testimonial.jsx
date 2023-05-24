import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]); // Initial value

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <SectionHeader
        subHeading={"What Our Clients Say"}
        heading={"Testimonials"}
      ></SectionHeader>
      <Swiper
        navigation={true}
        modules={[Navigation]}
      >
        <div>
          {reviews.map((review) => (
            <SwiperSlide
              key={review._id}
              className="md:px-20 px-10 space-y-4 mt-10"
            >
              <Rating
               style={{maxWidth: 250}}
                value={review.rating}
                className="mx-auto"
                readOnly
              />
              <FaQuoteLeft className="text-6xl w-full"></FaQuoteLeft>
              <p className="md:text-center text-justify">
                {review.details}
              </p>
              <h3 className="text-3xl text-[#CD9003] text-center uppercase">
                {review.name}
              </h3>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
