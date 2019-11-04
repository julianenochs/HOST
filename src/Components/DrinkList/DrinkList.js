import React, { Component } from 'react';
import './DrinkList.scss';
import { connect } from 'react-redux';
import { togglePartyInput, saveCocktailToParty, deleteCocktail } from '../../Actions/index';

export class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedParty: props.parties.list.id,
      showSubmission: false
    }
  }

  handleDelete = (id) => {
    this.props.deleteCocktail(id)
  }

  handleChange = (e) => {
    e.stopPropagation();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = () => {
    this.props.saveCocktailsToParty({selectedParty: this.state.selectedParty, cocktail: this.props.selectedCocktail});
    this.setState({ showSubmission: true })
    setTimeout(() => {
      this.setState({ showSubmission: false })
    }, 2000)
  }

  render() {
    const { viewCocktail, parties, fromParty } = this.props
    return(
      <section className='single-cocktail__container'>
        <div className='cocktail-card'>
          <h2 className='cocktail-card-name'>{viewCocktail.strDrink}</h2>
          <img className='cocktail-card__img' src={`${viewCocktail.strDrinkThumb}`} alt={`${viewCocktail.strDrink}`}/>
          <h3>Glass Type: {viewCocktail.strGlass}</h3>
          <p>How To: {viewCocktail.strInstructions}</p>
          {fromParty ?
            <button onClick={() => this.handleDelete(viewCocktail.idDrink)}> Remove </button>
          :
            parties.list.length ?
          <div>
            <h3>
              Save To Party:
            </h3>
              <select name='selectedParty' onChange={this.handleChange} value={this.state.selectedParty}>
                <option value='select'> Select </option>
              {parties.list.map(party => {
                return <option value={`${party.id}`}>{`${party.name}`}</option>
              })}
            </select>
            <button className='' onClick={this.handleSubmit}> Submit </button>
            {this.state.showSubmission ? <div id='submitted' > Submitted </div> : ''}
          </div>
            : <button className='add-party__button' onClick={this.props.togglePartyInput}> Start a Party </button>}
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
  saveCocktailsToParty: (cocktail) => dispatch(saveCocktailToParty(cocktail)),
  deleteCocktail: (cocktailId) => dispatch(deleteCocktail(cocktailId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkList);
