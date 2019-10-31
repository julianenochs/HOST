import React from 'react';
import './CocktailContainer.scss';
import CocktailSearch from '../../Containers/CocktailSearch/CocktailSearch';
import { connect } from 'react-redux';

const CocktailContainer = (props) => {
  console.log('props', props)
  return (<div className='cocktail__container'>
  {props.cocktailsByName.map((cocktail, i) => {
    return <div>
      <ul key={i}>{cocktail.strDrink}</ul>
      <img className='cocktail__img'src={`${cocktail.strDrinkThumb}`}></img>
      <button onClick={() => props.viewCocktail(cocktail)}>View Cocktail</button>
      </div>
  })}
    <CocktailSearch />
    </div>)
}

const mapStateToProps = state => ({
  cocktailsByName: state.cocktailsByName
});

export default connect(mapStateToProps)(CocktailContainer);