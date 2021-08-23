import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';


const axios = require('axios').default;

class CategoryJoke extends React.Component {
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
        <h1 className="text__jokes">Chuck Norris Facts</h1>
        <h3>{'"' + this.state.fact + '"'}</h3>
        <Button 
          type="button"
          className="btn btn-primary"
          onClick={this.getFact}
        >
          Next Chuck Joke
        </Button>
      </div>
    );
  }
}

export default CategoryJoke;