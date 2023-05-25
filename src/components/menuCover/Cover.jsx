import React from "react";

const Cover = ({
  heading,
  subHeading,
  bgImage,
  headingDesign,
  contentBg,
  contentWrapper,
  subHeadingDesign,
}) => {
  return (
    <div
      className="hero md:h-[800px] h-[400px]"
      style={{
        backgroundImage: `url("${bgImage}")`,
      }}
    >
      <div
        className={contentWrapper}
        style={{ background: `${contentBg}` }}
      >
        <div>
          <h1 className={headingDesign}>{heading}</h1>
          <p className={`${subHeadingDesign}`}>{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
