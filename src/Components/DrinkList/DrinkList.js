import React, { Component } from 'react';
import './DrinkList.scss';
import { connect } from 'react-redux';
import { togglePartyInput, saveCocktailToParty } from '../../Actions/index';
import { Link } from 'react-router-dom';
export class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedParty: ''}
  }

  handleChange = (e) => {
    this.setState({selectedParty: e.target.value});
  }

  handleSubmit = () => {
    this.props.saveCocktailToParty(this.state.selectedParty);
  }

  render() {
    const { viewCocktail, parties } = this.props
    return(
      <section className='single-cocktail__container'>
        <div className='cocktail-card'>
          <h2>{viewCocktail.strDrink}</h2>
          <img className='cocktail-card__img' src={`${viewCocktail.strDrinkThumb}`} alt={`${viewCocktail.strDrink}`}/>
          <h3>Glass Type: {viewCocktail.strGlass}</h3>
          <p>How To: {viewCocktail.strInstructions}</p>
          {parties.list.length ?
          <div>
            <h3>
              Save To Party:
            </h3>
            <select onChange={this.handleChange}>
              {parties.list.map(party => {
                return <option value={`${party.name}`}>{`${party.name}`}</option>
              })}
            </select>
          </div>
            : <button className='add-party__button' onClick={this.props.togglePartyInput}> Start a Party </button>}
            <button className='' onClick={this.handleSubmit}> Submit </button>
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
  togglePartyInput: () => dispatch(togglePartyInput()),
  saveCocktailToParty: (cocktail) => dispatch(saveCocktailToParty(cocktail))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkList);
