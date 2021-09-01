import React, { Component} from 'react';
import '../Style.css';

class Cetegories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories:[],
      jokes:{},
    }
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then((response)=>response.json())
    .then((data) => this.setState({categories:data}));
  }
  handleChange=(e)=>{
    const cat = e.target.value;
    const url= 'https://api.chucknorris.io/jokes/random?category='+ cat;
    fetch(url)
    .then((response) =>response.json())
    .then((data) => this.setState({jokes:data}));
  };
  render() {
    return (
      <div className="jokes__container">
      
        <h1 className="joke__title">
            Category Jokes
        </h1>
        
        <select onChange={this.handleChange}>

          <option>Categories</option>

          {this.state.categories.map((category) => (
          
            <option key={category}>
                {category}
            </option>
        ))}
     
        </select>
        <div className="jokes__box">
            <h1 className="jokes__text">
                {this.state.jokes.value}
            </h1>
        </div>
      </div>
    );
  }
}
  
export default Cetegories;