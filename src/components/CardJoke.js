import React from "react";

const CardJoke = ({ joke }) => {
  const { value } = joke;
  
  return (
    <div>
      <div>
          <img
            className="cuck__icon"
            src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
            alt="chuck-icon"
          />
      </div>
      <div className="container__jokes">
        <p className="jokes__text "> {value} </p>
      </div>
    </div>
  );
};

export default CardJoke;
