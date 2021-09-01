import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import '../Style.css';

const API_URL = `https://api.chucknorris.io/jokes/random`;

function RandomJoke() {
    const [joke, setJoke] = useState('');
    
    const getJoke= () => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setJoke(data?.value));
    }
    
    useEffect(() => {
        getJoke();
    }, [])
    
    return (
        <div className="joke__container">
            <h1 className="joke__title"> Random Jokes </h1>            
                    <blockquote>
                        <p className="joke__text"> { joke } </p>
                    </blockquote>
            <p></p>
                <Button 
                    variant="outlined" 
                    color="primary"
                    onClick={ getJoke }
                    >
                    Next Joke
                </Button>
                <p></p>
        </div>   
    )
}

export default RandomJoke;