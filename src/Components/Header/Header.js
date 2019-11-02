import './Header.scss';
import React from 'react';
import CocktailSearch from '../../Containers/CocktailSearch/CocktailSearch';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <section className='header'>
      <h1 className='header__text'> _HOST </h1>
      <Link to='/'>
        <div>Home</div>
      </Link>
      <CocktailSearch />
    </section>
  )
}

export default Header;