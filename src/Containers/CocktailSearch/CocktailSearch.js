import React, { Component } from 'react';
import { searchCocktailByName } from '../../Actions/index';

export class CocktailSearch extends Component {
  constructor() {
    super();
    this.state = {
      selectedCocktail: ''
    }
  }

  componentDidMount() {
    searchCocktailByName()
  }

  handleChange = (e) => {
    this.setState({ selectedCocktail: [e.target.value] })
  }

  handleSearch = () => {
    
  }

  render(){
    return(
      <section>
        <input
          type='search'
          name='search'
          placeholder='Search For Cocktails'
          value={this.state.selectedCocktail}
          onChange={this.handleChange}
          />
          <button onClick={this.handleSearch}>Search</button>
        </section>
    )
  }
}

export default CocktailSearch;