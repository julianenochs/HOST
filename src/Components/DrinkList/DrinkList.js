import React, { Component } from 'react';
import './DrinkList.scss';
import { connect } from 'react-redux';
import { togglePartyInput } from '../../Actions/index';
import { Link } from 'react-router-dom';
export class DrinkList extends Component {
  render() {
    const { viewCocktail, parties } = this.props
    return(
      <section className='single-cocktail__container'>
        <div className='cocktail-card'>
          <h2>{viewCocktail.strDrink}</h2>
          <img className='cocktail-card__img' src={`${viewCocktail.strDrinkThumb}`} alt={`${viewCocktail.strDrink}`}/>
          <h3>Glass Type: {viewCocktail.strGlass}</h3>
          <p>How To: {viewCocktail.strInstructions}</p>
          {parties.length ?
          <div>
            <h3>
              Save To Party:
            </h3>
            <select>
              {parties.map(party => {
                return <option value={`${party.name}`}>{`${party.name}`}</option>
              })}
            </select>
          </div>
            : <button className='add-party__button' onClick={this.props.togglePartyInput}> Start a Party </button>}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  currentCocktail: state.currentCocktail,
  parties: state.parties,
  isPartyInputVisible: state.isPartyInputVisible
})

const mapDispatchToProps = dispatch => ({
  togglePartyInput: () => dispatch(togglePartyInput())
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkList);
