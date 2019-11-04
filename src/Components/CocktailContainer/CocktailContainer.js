import React from 'react';
import './CocktailContainer.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectCocktail } from '../../Actions/index';

const CocktailContainer = (props) => {
  return (<div className='cocktail__container'>
  {props.cocktailsByName.map((cocktail, i) => {
    return <div className='cocktail__element'>
        <ul className='cocktail-name' key={i}>{cocktail.strDrink}</ul>
        <img className='cocktail__img'src={`${cocktail.strDrinkThumb}`} alt={`${cocktail.strDrink}`}/>
        <NavLink to={`/cocktail/${cocktail.idDrink}`}>
          <button className='view-cocktail__button' onClick={() => props.selectCocktail(cocktail)}> View Cocktail </button>
        </NavLink>
      </div>
  })}
    </div>)
}

const mapStateToProps = state => ({
  cocktailsByName: state.cocktailsByName,
});

const mapDispatchToProps = dispatch => ({
  selectCocktail: (cocktail) => dispatch(selectCocktail(cocktail))
})

export default connect(mapStateToProps, mapDispatchToProps)(CocktailContainer);