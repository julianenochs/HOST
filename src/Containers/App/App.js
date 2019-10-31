import React, { Component } from 'react';
import './App.scss';
import Menu from '../../Containers/Menu/Menu';
import Header from '../../Components/Header/Header';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import CocktailContainer from '../../Components/CocktailContainer/CocktailContainer';
import PartyContainer from '../../Components/PartyContainer/PartyContainer';
import { connect } from 'react-redux';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      parties: [{name: ''}]
    }
  }

  componentDidMount() {
    
  }

  setPartyName = (party) => {
    // this.state.parties.push({name: [party]})
  }

  viewCocktail = cocktail => {
    console.log(cocktail)
    return <Redirect to={`/${cocktail.strDrink}`}/>
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <section className='main__section'>
          <Menu />
            <BrowserRouter>
              <Route
                path='/'
                render={props => (
                  <CocktailContainer {...props}
                    viewCocktail={this.viewCocktail}/>
                  )}>
              </Route>
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
  parties: state.parties
})

export default connect(mapStateToProps)(App);
