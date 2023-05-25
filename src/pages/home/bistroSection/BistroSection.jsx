import React from "react";
import "./BistroSection.css";

const BistroSection = () => {
  return (
    <div className=" bistroBg md:px-40 md:py-24 px-8 py-4 md:bg-cover bg-center bg-no-repeat bg-fixed">
      <div className=" md:px-40 md:py-24 text-center p-2 md:p-0 bg-[#1E1E1E]/50 text-white backdrop-blur-xl">
        <h2 className="md:text-5xl text-2xl uppercase my-2">Bistro Boss</h2>
        <p className=" text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroSection;
