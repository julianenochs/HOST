import React from 'react';
import './DrinkList.scss';

const DrinkList = (props) => {
  console.log('props', props.viewCocktail)
  const { viewCocktail } = props
  let cocktail = Object.keys(viewCocktail)
  console.log('cocktail', cocktail)
  return(
    <div className='single-cocktail__container'>
      <h2>{viewCocktail.strDrink}</h2>
      <img className='cocktail__img' src={viewCocktail.strDrinkThumb}></img>
      <p>{viewCocktail.strGlass}</p>
    </div>
  )
}

export default DrinkList;