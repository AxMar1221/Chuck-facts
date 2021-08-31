import React from "react";
import RandomJoke from "./random/RandomJoke";
import SelectCategories from "./SelectCategories";

const Chuckjokes = () => {

  return (
    <div className="jokes__box">
      <SelectCategories />

      <RandomJoke />
    </div>
  );
};

export default Chuckjokes;
