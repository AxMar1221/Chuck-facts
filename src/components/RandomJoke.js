import React from 'react';
import { Button } from '@material-ui/core';
import '../styles/Ramdon.css'


const axios = require('axios').default;

class RandomJoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: 'Chuck Norris can text using his walkie talkie and without batteries.'
    };
    
    this.getFact = this.getFact.bind(this);
  }
  
  getFact() {
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(response => {
      this.setState({fact: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  
  render() {
    return(
      <div className="container__jokes text-center">
        <div className="title__text">Chuck Norris Facts
         <h3 className="joke__text">{'"' + this.state.fact + '"'}</h3>
                <Button 
                type="button"
                className="btn btn__next"
                onClick={this.getFact}
                >
                Next Chuck Joke!
                </Button>
        </div>
      </div>
    );
  }
}

export default RandomJoke;