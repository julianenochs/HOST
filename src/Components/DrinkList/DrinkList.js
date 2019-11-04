import React, { Component } from 'react';
import './DrinkList.scss';
import { connect } from 'react-redux';
import { togglePartyInput, saveCocktailToParty } from '../../Actions/index';
import { Link } from 'react-router-dom';
export class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedParty: props.parties.list.id
    }
  }

  handleChange = (e) => {
    e.stopPropagation();
    let value = e.target.value
    this.setState({selectedParty: value});
  }

  handleSubmit = () => {
    this.props.saveCocktailsToParty({selectedParty: this.state.selectedParty, cocktail: this.props.selectedCocktail});
  }

  render() {
    const { viewCocktail, parties, fromParty } = this.props
    return(
      <section className='single-cocktail__container'>
        <div className='cocktail-card'>
          <h2>{viewCocktail.strDrink}</h2>
          <img className='cocktail-card__img' src={`${viewCocktail.strDrinkThumb}`} alt={`${viewCocktail.strDrink}`}/>
          <h3>Glass Type: {viewCocktail.strGlass}</h3>
          <p>How To: {viewCocktail.strInstructions}</p>
          {fromParty ?
          <button>delete</button>
          :
            parties.list.length ?
          <div>
            <h3>
              Save To Party:
            </h3>
              <select onChange={this.handleChange} value={this.state.selectedParty}>
              {parties.list.map(party => {
                return <option value={`${party.id}`}>{`${party.name}`}</option>
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
  parties: state.parties,
  isPartyInputVisible: state.isPartyInputVisible,
  selectedCocktail: state.selectedCocktail
})

const mapDispatchToProps = dispatch => ({
  togglePartyInput: () => dispatch(togglePartyInput()),
  saveCocktailsToParty: (cocktail) => dispatch(saveCocktailToParty(cocktail))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkList);
