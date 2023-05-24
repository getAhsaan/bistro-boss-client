import React from "react";
import { Link } from "react-router-dom";
import bistroLogo from "../../../assets/bistro-logo.png";
import cart from "../../../assets/icon/cart.png";
import profile from "../../../assets/others/profile.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <nav
          to={"/"}
          className="text-white"
        >
          Home
        </nav>
      </li>
      <li>
        <nav
          to={"/contact-us"}
          className="text-white"
        >
          Contact Us
        </nav>
      </li>
      <li>
        <nav
          to={"/dashboard"}
          className="text-white"
        >
          DashBoard
        </nav>
      </li>
      <li>
        <nav
          to={"/our-menu"}
          className="text-white"
        >
          Our Menu
        </nav>
      </li>
      <li>
        <nav
          to={"/our-shop"}
          className="text-white"
        >
          Our Shop
        </nav>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-20 bg-opacity-80 shadow-xl navbar bg-[#1E1E1E] mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#1E1E1E]"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to={"/"}
        >
          <img
            src={bistroLogo}
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex uppercase text-xl">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
       
      </div>
      <div className="-mt-7 navbar-end">
      <li className="md:w-[60px] md:h-[40px] w-[36px] h-[24px] -mt-7">
        <nav>
          <img
            src={cart}
            alt="cart"
          />
        </nav>
      </li>
      <li className=" mx-2 ">
        <nav
          to={"/sign-in"}
          className="text-white text-sm md:text-xl md:uppercase"
        >
          Sign Out
        </nav>
      </li>
      <li className=" mx-2">
        <nav>
          <img
            src={profile}
            alt="profile"
            className=" md:w-[40px] md:h-[40px] w-[24px] h-[24px] rounded-full"
          />
        </nav>
      </li>
      </div>
    </div>
  );
};

export default Navbar;
