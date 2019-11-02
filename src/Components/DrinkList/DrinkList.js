import React, { Component } from 'react';
import './DrinkList.scss';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
export class DrinkList extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    const { viewCocktail, parties } = this.props
    console.log('parties', parties)
    return(
      <section className='single-cocktail__container'>
        <div className='cocktail-card'>
          <h2>{viewCocktail.strDrink}</h2>
          <img className='cocktail-card__img' src={`${viewCocktail.strDrinkThumb}`} alt={`${viewCocktail.strDrink}`}/>
          <h3>Glass Type: {viewCocktail.strGlass}</h3>
          <p>How To: {viewCocktail.strInstructions}</p>
          <select>
            <option>Save To Party:</option>
            {parties.map(party => {
              console.log(party)
              return <option>{`${party.name}`}</option>
            })}
          </select>
          <Route path={`/${viewCocktail.idDrink}`}>
            <div>Back To Cocktails</div>
          </Route>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  currentCocktail: state.currentCocktail,
  parties: state.parties
})

export default connect(mapStateToProps)(DrinkList);
