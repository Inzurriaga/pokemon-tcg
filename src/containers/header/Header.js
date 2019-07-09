import React, { Component } from "react";
import { connect } from "react-redux";
import { setPokemonCards } from "../../actions";
import { ReactComponent as Pokedex } from "../../assets/pokedex.svg";
import { ReactComponent as Pokeball } from "../../assets/pokeball.svg";

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

  fetchUserInput = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://api.pokemontcg.io/v1/cards?name=${this.state.userInput}`);
    const pokemonCards = await response.json();
    this.props.setPokemonCards(pokemonCards);
  }  

  render() {
    return(
      <header>
          <div>
            <Pokeball className="pokeball-title"/>
            <h1>Pokémon TCG</h1>
          </div>
          <form onSubmit={this.fetchUserInput}>
            <input value={this.state.userInput} onChange={this.updateUserInput} placeholder="Search Card Name..." spellCheck={false}></input>
            <button onClick={this.fetchUserInput}><Pokedex className="pokedex"/></button>
          </form>
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPokemonCards: cards => dispatch(setPokemonCards(cards))
})

export default connect(null, mapDispatchToProps)(Header)