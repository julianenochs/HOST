import React, { Component } from 'react';
import { connect } from 'react-redux';
import PartyList from '../../Components/PartyList/PartyList';
import { addParty } from '../../Actions/index';
import './Menu.scss';

export class Menu extends Component {
  constructor() {
    super();
    this.state = {
      partyName: '',
      isInputVisible: false,
      hasParties: false,
      selectedPartyId: null
    }
  }

  showAddPartyInput = () => {
    this.setState({ partyName: '' , isInputVisible: !this.state.isInputVisible })
  }

  handleChange = (e) => {
    this.setState({ partyName : e.target.value })
  }

  handleAddParty = () => {
    this.props.parties(this.state.partyName)
    this.setState({ partyName: '', isInputVisible: false, hasParties: true })
  }

  setCurrentParty = (partyId) => {
    this.setState({ selectedPartyId: partyId })
    console.log('this.state', this.state)
  }

  render() {
    return(
      <aside className='menu__section'>
        <section className='menu__contents'>
          <option onClick={this.showAddPartyInput} className='start-party__button'> Start A Party </option>
          {this.state.isInputVisible ? 
          <div> <input type='text' name='partyName' value={this.state.partyName} onChange={this.handleChange} className='input'/> 
          <button onClick={this.handleAddParty}> + </button> 
          </div>: ''}
          {this.state.hasParties ? <h2 className='parties__header'>Your Parties<hr></hr></h2> : ''}
          {this.state.hasParties ? <PartyList setCurrentParty={this.setCurrentParty} key={Date.now()} /> : ''}
        </section>
      </aside>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  parties: (partyName) => dispatch(addParty(partyName)),
});

const mapStateToProps = state => ({
  parties: state.parties,
  currentParty: state.currentParty
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);