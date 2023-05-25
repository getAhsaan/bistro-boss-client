import React from "react";
import menuBanner from "../../assets/menu/banner3.jpg";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import MenuCategory from "../../components/menuItem/MenuCategory";
import Cover from "../../components/menuCover/Cover";
import img1 from "../../assets/home/chefService.jpg";
import Button from "../../components/Button";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
        <link to={"/our-menu"}></link>
      </Helmet>
      {/* BANNER SECTION  */}
      <div>
        <Cover
          bgImage={menuBanner}
          contentBg={"rgba(21, 21, 21, 0.6)"}
          contentWrapper={
            "hero-content text-center text-white w-3/4 h-2/5 md:px-40 "
          }
          heading={"Our Menu"}
          headingDesign={
            "md:mb-5 md:text-5xl text-3xl uppercase font-cinzel font-bold"
          }
          subHeading={"Would you like to try a dish?"}
          subHeadingDesign={" font-cinzel font-semibold md:text-sm text-xs"}
        ></Cover>
      </div>
      {/* TODAY'S OFFER SECTION  */}
      <div className="mt-20">
        <SectionHeader
          subHeading={"Don't Miss"}
          heading={"Today's Offer"}
        ></SectionHeader>
      </div>
      <div>
        <MenuCategory></MenuCategory>
        <div className="text-center">
          <Button btnContent={"Order Your Favourite Food"}></Button>
        </div>
      </div>
      {/* DESSERTS SECTION */}
      <div className="md:mt-20 mt-10">
        <Cover
          bgImage={img1}
          contentBg={"rgba(21, 21, 21, 0.6)"}
          contentWrapper={
            "hero-content text-center text-white w-3/4 h-2/5 md:px-40 py-24"
          }
          heading={"DESSERTS"}
          headingDesign={
            "md:mb-5 md:text-5xl text-3xl uppercase font-cinzel font-bold"
          }
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          subHeadingDesign={"font-cinzel font-semibold md:text-sm text-xs my-2"}
        ></Cover>
      </div>
      <div>
        <MenuCategory></MenuCategory>
        <div className="text-center">
          <Button btnContent={"Order Your Favourite Food"}></Button>
        </div>
      </div>
      {/* PIZZA SECTION */}
      <div className="md:mt-20 mt-10">
        <Cover
          bgImage={img1}
          contentBg={"rgba(21, 21, 21, 0.6)"}
          contentWrapper={
            "hero-content text-center text-white w-3/4 h-2/5 md:px-40 py-24"
          }
          heading={"PIZZA"}
          headingDesign={
            "md:mb-5 md:text-5xl text-3xl uppercase font-cinzel font-bold"
          }
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          subHeadingDesign={"font-cinzel font-semibold md:text-sm text-xs my-2"}
        ></Cover>
      </div>
      <div>
        <MenuCategory></MenuCategory>
        <div className="text-center">
          <Button btnContent={"Order Your Favourite Food"}></Button>
        </div>
      </div>
      {/* SALADS SECTION  */}
      <div className="md:mt-20 mt-10">
        <Cover
          bgImage={img1}
          contentBg={"rgba(21, 21, 21, 0.6)"}
          contentWrapper={
            "hero-content text-center text-white w-3/4 h-2/5 md:px-40 py-24"
          }
          heading={"SALADS"}
          headingDesign={
            "md:mb-5 md:text-5xl text-3xl uppercase font-cinzel font-bold"
          }
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          subHeadingDesign={"font-cinzel font-semibold md:text-sm text-xs my-2"}
        ></Cover>
      </div>
      <div>
        <MenuCategory></MenuCategory>
        <div className="text-center">
          <Button btnContent={"Order Your Favourite Food"}></Button>
        </div>
      </div>
      {/* SOUPS SECTION  */}
      <div className="md:mt-20 mt-10">
        <Cover
          bgImage={img1}
          contentBg={"rgba(21, 21, 21, 0.6)"}
          contentWrapper={
            "hero-content text-center text-white w-3/4 h-2/5 md:px-40 py-24"
          }
          heading={"SOUPS"}
          headingDesign={
            "md:mb-5 md:text-5xl text-3xl uppercase font-cinzel font-bold"
          }
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          subHeadingDesign={"font-cinzel font-semibold md:text-sm text-xs my-2"}
        ></Cover>
      </div>
      <div>
        <MenuCategory></MenuCategory>
        <div className="text-center">
          <Button btnContent={"Order Your Favourite Food"}></Button>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
