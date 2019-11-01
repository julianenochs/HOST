import './Header.scss';
import React from 'react';
import CocktailSearch from '../../Containers/CocktailSearch/CocktailSearch';

const Header = () => {
  return(
    <section className='header'>
      <h1 className='header__text'> _HOST </h1>
      <CocktailSearch />
    </section>
  )
}

export default Header;