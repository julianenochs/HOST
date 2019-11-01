import React from 'react';
import { connect } from 'react-redux';
import { selectParty } from '../../Actions/index';
import './PartyList.scss';

export const PartyList = (props) => {
  return props.parties.map(party => {
      return(<ul>
        <img className='icon' src='https://image.flaticon.com/icons/svg/766/766044.svg'/>
        <button className='party__list'
            onClick={() => {
              props.selectParty(party.id)
              props.setCurrentParty(party.id)
            }}>{party.name}</button>
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