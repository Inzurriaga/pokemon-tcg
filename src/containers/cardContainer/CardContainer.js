import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../card/Card"

export class CardContianer extends Component {

  renderPokemonCards = () => {
    return this.props.pokemonCards.cards.map(card => {
      return(
        <Card key={card.id} card={card} />
      )
    })
  }

  render() {
    const { cards } = this.props.pokemonCards
    let display;
    let css;
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
    if(this.props.cardInfoDisplay) {
      css = "card-info-display"
    }else {
      css = ""
    }
    return(
      <section style={{top: `${window.scrollY}px`}} className={`cardsContainer ${css}`}>
        {
          display
        }
      </section>
    )
  }
}

const mapStatetoProps = (state) => ({
  pokemonCards: state.pokemonCards,
  cardInfoDisplay: state.cardInfoDisplay
})

export default connect(mapStatetoProps)(CardContianer);