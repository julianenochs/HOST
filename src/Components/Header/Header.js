import './Header.scss';
import React from 'react';
import CocktailSearch from '../../Containers/CocktailSearch/CocktailSearch';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <section className='header'>
      <h1 className='header__text'> _HOST </h1>
      <CocktailSearch />
      <Link to='/'>
        <div onClick={() => props.resetHome()}>Home</div>
      </Link>
    </section>
  )
}

export default Header;