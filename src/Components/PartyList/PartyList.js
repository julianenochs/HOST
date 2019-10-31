import React from 'react';
import { connect } from 'react-redux';

export const PartyList = (props) => {
  console.log('party props', props)
  return props.parties.map(party => {
      return(
        <ul onClick={() => props.selectParty(party.id)}>{party.name}</ul>
      )
    })
}

const mapStateToProps = state => ({
  parties: state.parties,
  selectParty: state.selectParty
});

export default connect(mapStateToProps)(PartyList);