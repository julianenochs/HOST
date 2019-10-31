import React, { Component } from 'react';
import { searchCocktailsByName } from '../../apiCalls';
import { cocktailsByName } from '../../Actions/index';
import { connect } from 'react-redux';

export class CocktailSearch extends Component {
  constructor() {
    super();
    this.state = {
      selectedCocktail: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({ selectedCocktail: [e.target.value] })
  }
  
  handleSearch = () => {
    let cocktailQuery = this.state.selectedCocktail
    searchCocktailsByName(cocktailQuery)
      .then(data => {
        this.props.cocktailsByName(data)
      })
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
          <button onClick={this.handleSearch}> Search </button>
        </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  cocktailsByName: (cocktailNames) => dispatch(cocktailsByName(cocktailNames))
});

const mapStateToProps = state => ({
  cocktailsByName: state.cocktailsByName
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailSearch);