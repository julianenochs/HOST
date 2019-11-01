import React, { Component } from 'react';
import './App.scss';
import Menu from '../../Containers/Menu/Menu';
import Header from '../../Components/Header/Header';
import { Route } from 'react-router-dom';
import CocktailContainer from '../../Components/CocktailContainer/CocktailContainer';
import PartyContainer from '../../Components/PartyContainer/PartyContainer';
import { connect } from 'react-redux';
import DrinkList from '../../Components/DrinkList/DrinkList';
import { selectCocktail } from '../../Actions'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      parties: [{name: ''}],
      isDrinkSelected: false,
      currentCocktail: {}
    }
  }

  setCurrentCocktail = cocktail => {
    this.setState({ isDrinkSelected: true, currentCocktail: cocktail })
    this.props.selectedCocktail(this.state.currentCocktail.id)
  }

  viewCocktail = () => {
    return this.state.currentCocktail
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <section className='main__section'>
          <Menu />
              {!this.state.isDrinkSelected ? <Route
                path='/'
                render={props => 
                  <CocktailContainer {...props}
                    setCurrentCocktail={this.setCurrentCocktail}/>
                  }>
              </Route> : ''}
              {this.state.isDrinkSelected ? 
                <Route
                  exact path='/'
                  render={props => (
                    <DrinkList {...props} key={this.state.currentCocktail.idDrink} viewCocktail={this.viewCocktail()}/>
                  )}></Route> : ''}
              <Route
                path='/parties'
                render={props => (
                  <PartyContainer />
                  )}>
              </Route>
          </section>
      </div>
  );
}
}

const mapStateToProps = state => ({
  parties: state.parties,
  currentCocktail: state.currentCocktail
})

const mapDispatchToProps = dispatch => ({
  selectedCocktail: (cocktailId) => dispatch(selectCocktail(cocktailId))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
