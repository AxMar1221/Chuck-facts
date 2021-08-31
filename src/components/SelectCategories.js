import React, { useReducer } from "react";
import CardJoke from "./CardJoke";

const RANDOM_BY_CATEGORIE = "randombycategorie";
const SEARCH_JOKES = "search";
const SelectCategories = ({
  initialState = {
    categories: [],
    jokeByCategorie: {},
    searchJokes: [],
  },
}) => {
  function searchJokes({ target }) {
    fetch(`https://api.chucknorris.io/jokes/search?query=${target.value}`)
      .then((data) => data.json())
      .then((searchJoke) => {
        return dispatch({
          payload: searchJoke.result,
          type: "setSearchJoke",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function selectedOption({ target }) {
    fetch(`https://api.chucknorris.io/jokes/random?category=${target.value}`)
      .then((data) => data.json())
      .then((jokeByCategorie) => {
        return dispatch({
          payload: jokeByCategorie,
          type: "setjokeByCategorie",
        });
      });
  }
  function fetchCategories() {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((dataOfCategories) => dataOfCategories.json())
      .then((dataOfCategories) => {
        return dispatch({
          payload: dataOfCategories,
          type: "setCategoriesOfJokes",
        });
      });
  }
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "setCategoriesOfJokes":
        return { ...state, categories: action.payload };
      case "setjokeByCategorie":
        return {
          ...state,
          jokeByCategorie: action.payload,
          typeOfJoke: RANDOM_BY_CATEGORIE,
        };
      case "setSearchJoke":
        return {
          ...state,
          searchJokes: action.payload,
          typeOfJoke: SEARCH_JOKES,
        };
      default:
      
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const currentJoke =
    state.typeOfJoke = state.jokeByCategorie;
  if (state.searchJokes !== undefined) {
  }
  return (
    <div>
      <p></p>
      <header>
        <h3 className="chuck__facts">Chuck Facts</h3>
        <img 
         src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
         alt="Cuchk-icon"
        />
      </header>
      <p></p>
      <div>
        <div>
          <form className="jokes__container">
              <p></p>
              <label htmlFor="category">
                <input
                  name="category"
                  type="radio"
                  value="from categories"
                  id="from categories"
                  onClick={fetchCategories}
                >
                </input>
                  Categories
            </label>

            <select onChange={(event) => selectedOption(event)}>
              {state.categories.map((categorie) => {
                return (
                  <option key={categorie} value={categorie}>
                    {categorie}
                  </option>
                );
              })}
            </select>
            <div>
              <p></p>
              <label htmlFor="search">
                <input
                  type="radio"
                  value="search"
                  id="search"
                  name="search"
                ></input>
                Search
              </label>
              <input
                type="text"
                placeholder="Search a joke"
                onChange={(event) => searchJokes(event)}
              ></input>
            </div>
          </form>
        </div>
      </div>
      <p></p>
      {state.typeOfJoke === SEARCH_JOKES && state.searchJokes !== undefined ? (
        state.searchJokes.map((searchJoke) => {
          return <CardJoke joke={searchJoke}></CardJoke>;
        })
      ) : (
        <CardJoke joke={currentJoke}></CardJoke>
      )}
    </div>
  );
};
export default SelectCategories;
