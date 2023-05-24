import React from "react";
import Banner from "../banner/Banner";
import OrderSection from "../orderSection/OrderSection";
import BistroSection from "../bistroSection/BistroSection";
import Menu from "../menu/Menu";
import CallSection from "../callSection/CallSection";
import ChefSection from "../chefSection/ChefSection";

const Home = () => {
  return (
    <div>
      <OrderSection></OrderSection>
      <BistroSection></BistroSection>
      <Menu></Menu>
      <CallSection></CallSection>
      <ChefSection></ChefSection>
    </div>
  );
};

export default Home;
