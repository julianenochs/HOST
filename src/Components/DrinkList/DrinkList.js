import React, { Component } from 'react';
import './DrinkList.scss';
import { connect } from 'react-redux';
export class DrinkList extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    const { viewCocktail } = this.props
    console.log('viewCocktail', viewCocktail)
    return(
      <section className='single-cocktail__container'>
        <div className='cocktail-card'>
          <h2>{viewCocktail.strDrink}</h2>
          <img className='cocktail-card__img' src={`${viewCocktail.strDrinkThumb}`} />
          <h3>Glass Type: {viewCocktail.strGlass}</h3>
          <p>How To: {viewCocktail.strInstructions}</p>
          <button>Back To Cocktails</button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  currentCocktail: state.currentCocktail
})

export default connect(mapStateToProps)(DrinkList);
