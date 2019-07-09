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
    let cardDisplayCss;
    let ResultFound;
    if( cards === "Home" ){
      ResultFound ="normal-background"
      display = (
        <h2>Search for your favorite Pokemon Card</h2>
      );
    }else if( cards.length === 0 ){
      ResultFound = "result-not-found-background "
      display = (
        <h2>Pokemon Card not found</h2>
      );
    }else{
      ResultFound ="normal-background"
      display = this.renderPokemonCards();
    }
    if(this.props.cardInfoDisplay) {
      cardDisplayCss = "card-info-display";
    }else {
      cardDisplayCss = "";
    }
    return(
      <section className={`cardsContainer ${cardDisplayCss} ${ResultFound} `}>
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