import React from 'react';
import './CocktailContainer.scss';
import { connect } from 'react-redux';

const CocktailContainer = (props) => {
  return (<div className='cocktail__container'>
  {props.cocktailsByName.map((cocktail, i) => {
    return <div className='cocktail__element'>
      <ul key={i}>{cocktail.strDrink}</ul>
      <img className='cocktail__img'src={`${cocktail.strDrinkThumb}`}></img>
      <button onClick={() => props.setCurrentCocktail(cocktail)}> View Cocktail </button>
      </div>
  })}
    </div>)
}

const mapStateToProps = state => ({
  cocktailsByName: state.cocktailsByName
});

export default connect(mapStateToProps)(CocktailContainer);