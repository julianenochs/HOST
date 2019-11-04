import './Header.scss';
import React from 'react';
import CocktailSearch from '../../Containers/CocktailSearch/CocktailSearch';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <section className='header'>
      <h1 className='header__text'> _HOST </h1>
      <div className='right-side__header'>
        <CocktailSearch />
        <Link to='/'>
          <button onClick={() => props.resetHome()} className='home__button' >Home</button>
        </Link>
      </div>
    </section>
  )
}

export default Header;