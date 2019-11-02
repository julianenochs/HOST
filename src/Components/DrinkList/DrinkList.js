import React, { Component } from 'react';
import './DrinkList.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
export class DrinkList extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  }

  render() {
    const { viewCocktail, parties } = this.props
    return(
      <section className='single-cocktail__container'>
        <div className='cocktail-card'>
          <h2>{viewCocktail.strDrink}</h2>
          <img className='cocktail-card__img' src={`${viewCocktail.strDrinkThumb}`} alt={`${viewCocktail.strDrink}`}/>
          <h3>Glass Type: {viewCocktail.strGlass}</h3>
          <p>How To: {viewCocktail.strInstructions}</p>
          {parties.length > 0 ? <select>
            <option>Save To Party:</option>
            {parties.map(party => {
              return <option value={`${party.name}`}>{`${party.name}`}</option>
            })}
          </select> : ''}
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
