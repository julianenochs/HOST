import React from 'react';
import DrinkList from '../DrinkList/DrinkList';
import './PartyContainer.scss';

const PartyContainer = (props) => {
  const {cocktails} = props;

  if (!cocktails.length) {
    return <h2 className='no-cocktails__error'>No cocktails saved to this party</h2>;
  }

  return (
    <div className='cocktail__container'>
      {cocktails.map(cocktail => {
        return (
          <DrinkList
            viewCocktail={cocktail}
            parties={[]}
            fromParty={true}
          />);
      })}    
    </div>
  );
}

export default PartyContainer;