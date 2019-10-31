import React, { Component } from 'react';
import './App.scss';
import Menu from '../../Containers/Menu/Menu';
import Header from '../../Components/Header/Header';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import CocktailContainer from '../../Components/CocktailContainer/CocktailContainer';
import PartyContainer from '../../Components/PartyContainer/PartyContainer';
import { connect } from 'react-redux';
import DrinkList from '../../Components/DrinkList/DrinkList';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      parties: [{name: ''}],
      isDrinkSelected: false,
      currentCocktail: null
    }
  }

  setCurrentCocktail = cocktail => {
    this.setState({ isDrinkSelected: true, currentCocktail: cocktail })
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
            <BrowserRouter>
              {!this.state.isDrinkSelected ? <Route
                path='/'
                render={props => (
                  <CocktailContainer {...props}
                    setCurrentCocktail={this.setCurrentCocktail}/>
                  )}>
              </Route> : ''}
              {this.state.isDrinkSelected ? 
                <Route
                  path='/'
                  render={props => (
                    <DrinkList {...props} viewCocktail={this.viewCocktail()}/>
                  )}></Route> : ''}
              <Route
                path='/parties'
                render={props => (
                  <PartyContainer />
                  )}>
              </Route>
            </BrowserRouter>
          </section>
      </div>
  );
}
}

const mapStateToProps = state => ({
  parties: state.parties,
  currentCocktail: state.currentCocktail
})

export default connect(mapStateToProps)(App);
