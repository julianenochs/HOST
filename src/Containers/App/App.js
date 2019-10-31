import React, { Component } from 'react';
import './App.scss';
import Menu from '../../Containers/Menu/Menu';
import Header from '../../Components/Header/Header';
import { Route, BrowserRouter } from 'react-router-dom';
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
    this.state.parties.push({name: [party]})
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
                  <CocktailContainer />
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
