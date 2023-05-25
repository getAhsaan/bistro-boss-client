import React from "react";

const Button = ({btnContent}) => {
  return (
    <div>
      <button className="btn btn-outline border-0 border-b-2">
      {btnContent}
      </button>
    </div>
  );
};

export default Button;
