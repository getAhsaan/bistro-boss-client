import React from "react";
import Banner from "../banner/Banner";
import OrderSection from "../orderSection/OrderSection";
import BistroSection from "../bistroSection/BistroSection";
import Menu from "../menu/Menu";
import CallSection from "../callSection/CallSection";
import ChefSection from "../chefSection/ChefSection";
import MenuTwo from "../menuTwo/MenuTwo";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <OrderSection></OrderSection>
      </div>
      <div className="max-w-6xl mx-auto">
        <BistroSection></BistroSection>
      </div>
      <div className="max-w-6xl mx-auto">
        <Menu></Menu>
      </div>
      <div className="max-w-6xl mx-auto">
        <CallSection></CallSection>
      </div>
      <div className="max-w-6xl mx-auto">
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
