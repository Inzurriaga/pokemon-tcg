import React, { Component } from "react";
import { connect } from "react-redux";
import { cardInfoDisplay } from "../../actions"

export class CardInfo extends Component {
  constructor(){
    super();
    this.state = {
      pokemon: {}
    }
  }

  componentDidMount() {
    const { pokemon } = this.props
    this.props.cardInfoDisplay(true)
    if(typeof pokemon !== "string"){
      this.setState({
        pokemon
      });
    } else {
      console.log("hello im in the card info")
      this.fetchPokemon(pokemon);
    }
  }

  fetchPokemon = async (id) => {
    console.log(id)
    const response = await fetch(`https://api.pokemontcg.io/v1/cards/${id}`);
    const pokemon = await response.json();
    console.log(pokemon)
    this.setState({
      pokemon: pokemon.card
    })
  }

  render() {
    console.log(this.props.pokemon)
    return(
      <section className="card-info">
        <div className="top"></div>
        <section className="left">
          <h2>{this.state.pokemon.name}</h2>
          <img src={this.state.pokemon.imageUrlHiRes}  alt="card"/>
        </section>
        <section className="right">
          <article>
            <h2>{this.state.pokemon.name}</h2>
          </article>
        </section>
        <div className="bottom"></div>
      </section>
    )
  }

  async componentWillUnmount() {
    this.props.cardInfoDisplay(false)
    setTimeout(() => {
      console.log("hello")
    }, 1000);
  }
}

const mapDispatchToProps = (dispatch) => ({
  cardInfoDisplay: bool => dispatch(cardInfoDisplay(bool))
})

export default connect(null, mapDispatchToProps)(CardInfo)