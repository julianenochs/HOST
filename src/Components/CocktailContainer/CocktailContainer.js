import React from 'react';
import './CocktailContainer.scss';
import CocktailSearch from '../../Containers/CocktailSearch/CocktailSearch';
const CocktailContainer = () => {
  return(
    <section className='cocktail__container'>
      <CocktailSearch />
    </section>
  )
}

export default CocktailContainer;