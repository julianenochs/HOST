import React, { Component } from 'react';
import './DrinkList.scss';
import { connect } from 'react-redux';
export class DrinkList extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section className='single-cocktail__container'>
        <p>hi</p>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  currentCocktail: state.currentCocktail
})

export default connect(mapStateToProps)(DrinkList);
