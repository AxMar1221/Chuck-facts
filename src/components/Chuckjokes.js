import React from "react";
import RandomJoke from "./random/RandomJoke";
import SelectCategories from "./SelectCategories";

const Chuckjokes = () => {

  return (
    <div>
      <SelectCategories />

      <RandomJoke />
    </div>
  );
};

export default Chuckjokes;
