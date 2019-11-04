import React from 'react';
import { connect } from 'react-redux';
import { selectParty } from '../../Actions/index';
import { Link } from 'react-router-dom';
import './PartyList.scss';

export const PartyList = (props) => {
  return props.parties.list.map(party => {
    return(
      <ul>
        <Link to={`/party/${party.id}`}>
          <button
            className='party__list'
            onClick={() => {
              props.selectParty(party.id)
              props.setCurrentParty(party.id)
            }}
          >
            {party.name}
          </button>
        </Link>
      </ul>
      )
    })
  }
  

const mapStateToProps = state => ({
  parties: state.parties,
});

const mapDispatchToProps = dispatch => ({
  selectParty: (partyId) => dispatch(selectParty(partyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PartyList);