import React, { Component } from 'react';
import './App.scss';
import Menu from '../../Containers/Menu/Menu';
import Header from '../../Components/Header/Header';
import { Route } from 'react-router-dom';
import CocktailContainer from '../../Components/CocktailContainer/CocktailContainer';
import PartyContainer from '../../Components/PartyContainer/PartyContainer';
import { connect } from 'react-redux';
import DrinkList from '../../Components/DrinkList/DrinkList';

export class App extends Component {
  constructor() {
    super();
  }

  setCurrentCocktail = cocktail => {
    this.props.selectedCocktail()
  }

  viewCocktail = () => {
    return this.props.selectedCocktail
  }

  resetHome = () => {
    this.setState({isDrinkSelected : false })
  }

  render() {
    return (
      <div className='App'>
        <Header resetHome={this.resetHome}/>
        <section className='main__section'>
          <Menu />
              <Route
                path={`/drinks`}
                render={props => 
                  <CocktailContainer {...props} />
                  }>
              </Route>
              {
                this.props.selectedCocktail ?
              <Route
                path={`/cocktail/${this.props.selectedCocktail.idDrink}`}
                render={props => (
                  <DrinkList {...props} key={this.props.selectedCocktail.idDrink} viewCocktail={this.viewCocktail()} fromParty={false}/>
                )}
                >
                </Route> : ''
              }
              {this.props.parties.list.map(party => {
                return (
                  <Route
                    path={`/party/${party.id}`}
                    render={props => (
                      <PartyContainer cocktails={party.cocktails} />
                    )}>
                  </Route>
                );
              })}
          </section>
      </div>
  );
}
}

const mapStateToProps = state => ({
  parties: state.parties,
  cocktailsByName: state.cocktailsByName,
  currentParty: state.currentParty,
  selectedCocktail: state.selectedCocktail
})


export default connect(mapStateToProps)(App);
