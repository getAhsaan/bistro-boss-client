import React from "react";
import Banner from "../banner/Banner";
import OrderSection from "../orderSection/OrderSection";
import BistroSection from "../bistroSection/BistroSection";
import Menu from "../menu/Menu";
import CallSection from "../callSection/CallSection";
import ChefSection from "../chefSection/ChefSection";
import MenuTwo from "../menuTwo/MenuTwo";
import Testimonial from "../testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto">
        <OrderSection></OrderSection>
        <BistroSection></BistroSection>
        <Menu></Menu>
        <CallSection></CallSection>
        <ChefSection></ChefSection>
      </div>
      <MenuTwo></MenuTwo>
      <div className="max-w-6xl mx-auto">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
