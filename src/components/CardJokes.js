import React from 'react';
import RandomJoke from './random/RandomJoke';
import Categories from './category/Categories';

const CardJokes = () => {
    return (
        <div className="jokes__box">
            <RandomJoke />

            <Categories />
        </div>
    )
}

export default CardJokes
