import React from 'react';
import './CocktailContainer.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCocktail } from '../../Actions/index';

const CocktailContainer = (props) => {
  console.log(props);
  return (<div className='cocktail__container'>
  {props.cocktailsByName.map((cocktail, i) => {
    return <div className='cocktail__element'>
        <ul className='cocktail-name' key={i}>{cocktail.strDrink}</ul>
        <img className='cocktail__img'src={`${cocktail.strDrinkThumb}`} alt={`${cocktail.strDrink}`}/>
        <Link to={`/drinks/${cocktail.idDrink}`}>
          <button className='view-cocktail__button' onClick={() => props.selectCocktail(cocktail)}> View Cocktail </button>
        </Link>
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