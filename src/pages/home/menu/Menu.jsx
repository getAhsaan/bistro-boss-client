import React from "react";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import MenuCategory from "../../../components/menuItem/MenuCategory";
import Button from "../../../components/Button";

const Menu = () => {
  return (
    <div className="md:my-20 my-8">
      <SectionHeader
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      />
      <MenuCategory></MenuCategory>
      <div className="text-center">
        <Button btnContent={"View Full Menu"}></Button>
        </div>
    </div>
  );
};

export default Menu;
