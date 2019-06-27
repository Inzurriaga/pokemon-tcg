import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom"

export class CardContianer extends Component {

  renderPokemonCards = () => {
    return this.props.pokemonCards.cards.map(card => {
      return(
        <NavLink key={card.id} className="cards-link">
          <img src={card.imageUrlHiRes} alt="cards"/>
        </NavLink>
      )
    })
  }

  render() {
    const { cards } = this.props.pokemonCards
    let display;
    if( cards === "Home" ){
      display = (
        <h1>hello im home</h1>
      );
    }else if( cards.length === 0 ){
      display = (
        <h1>result not found</h1>
      );
    }else{
      display = this.renderPokemonCards();
    }
    return(
      <section className="cardsContainer">
        {
          display
        }
      </section>
    )
  }
}

const mapStatetoProps = (state) => ({
  pokemonCards: state.pokemonCards
})

export default connect(mapStatetoProps)(CardContianer);