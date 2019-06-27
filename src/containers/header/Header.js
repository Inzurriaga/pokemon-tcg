import React, { Component } from "react";
import { connect } from "react-redux";
import { setPokemonCards } from "../../actions"

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    }
  }

  updateUserInput = (e) => {
    this.setState({
      userInput: e.target.value
    });
  }

  fetchUserInput = async () => {
    const response = await fetch(`https://api.pokemontcg.io/v1/cards?name=${this.state.userInput}`);
    const pokemonCards = await response.json();
    this.props.setPokemonCards(pokemonCards);
  }  

  render() {
    return(
      <header>
          <input value={this.state.userInput} onChange={this.updateUserInput}></input>
          <button onClick={this.fetchUserInput}></button>
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPokemonCards: cards => dispatch(setPokemonCards(cards))
})

export default connect(null, mapDispatchToProps)(Header)