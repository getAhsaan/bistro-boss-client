import React from "react";
import Banner from "../banner/Banner";
import OrderSection from "../orderSection/OrderSection";
import BistroSection from "../bistroSection/BistroSection";
import Menu from "../menu/Menu";
import CallSection from "../callSection/CallSection";
import ChefSection from "../chefSection/ChefSection";
import MenuTwo from "../menuTwo/MenuTwo";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
      <OrderSection></OrderSection>
      <BistroSection></BistroSection>
      <Menu></Menu>
      <CallSection></CallSection>
      <ChefSection></ChefSection>
      </div>
      <MenuTwo></MenuTwo>
    </div>
  );
};

export default Home;
