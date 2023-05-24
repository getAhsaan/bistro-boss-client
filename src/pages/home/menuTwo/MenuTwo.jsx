import React from "react";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import menuLight from "../../../assets/menu/menu-light.png";
import menuBgDark from "../../../assets/menu/menu-dark-bg.png";

const MenuTwo = () => {
  return (
   <div className="mt-10">
     <div style={{backgroundImage: `url("${menuBgDark}")`}} className="text-white md:py-10 bg-no-repeat bg-cover bg-fixed">
      <SectionHeader
        subHeading={"Check it out"}
        heading={"From Our Menu"}
      ></SectionHeader>
      <div className="md:grid grid-cols-2 gap-8 my-8 items-center max-w-6xl mx-auto p-4">
        <div>
          <img
            src={menuLight}
            alt=""
          />
        </div>
        <div>
          <h3 className="md:text-2xl text-xl">March 20, 2023 </h3>
          <h3 className="md:text-2xl text-xl uppercase"> WHERE CAN I GET SOME?</h3>
          <p className="md:text-xl text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default MenuTwo;
