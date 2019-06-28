import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux"
import { Home } from "../home/Home";
import CardInfo from "../cardInfo/CardInfo";
import { cardInfoDisplay } from "../../actions";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={ Home } />
        <Route exact path="/pokemon/:id" render={({ match }) => {
            const pokemon = this.props.pokemonCards.cards.find(pokemon => pokemon.id === match.params.id)
            return (<CardInfo pokemon={pokemon} />)
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemonCards: state.pokemonCards
})

export default connect(mapStateToProps)(App);
