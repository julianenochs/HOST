import React from 'react';
import { connect } from 'react-redux';

export const PartyList = (props) => {
  return props.parties.map(party => {
      return(
        <ul>{party.name}</ul>
      )
    })
}

const mapStateToProps = state => ({
  parties: state.parties
});

export default connect(mapStateToProps)(PartyList);