import React from "react";

const CardJoke = ({ joke }) => {
  const { value } = joke;
  
  return (
    <div>
      <div className="jokes__container">
          <p className="jokes__text "> {value} </p>
      </div>
      <p></p>
    </div>
  );
};

export default CardJoke;
