import React, { Component } from "react";
import { connect } from "react-redux";
import { cardInfoDisplay } from "../../actions"

export class CardInfo extends Component {
  constructor(){
    super();
    this.state = {
      pokemon: {attacks: []},
      transitionAnimation: false
    }
  }

  async componentDidMount() {
    const { pokemon } = this.props
    this.props.cardInfoDisplay(true)
    if(typeof pokemon !== "string"){
      this.setState({
        pokemon,
        transitionAnimation: true
      });
    } else {
      await this.fetchPokemon(pokemon);
    }
  }

  fetchPokemon = async (id) => {
    const response = await fetch(`https://api.pokemontcg.io/v1/cards/${id}`);
    const pokemon = await response.json();
    this.setState({
      pokemon: pokemon.card
    })
  }

  render() {
    console.log(this.state.pokemon)
    const { pokemon, transitionAnimation} = this.state
    const transitionType = transitionAnimation ? "transition-to-card" : "load-to-card "
    return(
      <section className="card-info">
        <div className={`top ${transitionType}`}></div>
        <section className={`left ${transitionType}`}>
          <h2>{pokemon.name}</h2>
          <div>
            <img src={pokemon.imageUrlHiRes}  alt="card"/>
          </div>
        </section>
        <section className={`right ${transitionType}`}>
          <article>
            <h2>{`HP ${pokemon.hp}`}</h2>
            <section>
              {
                pokemon.attacks.map(attack => {
                  return(
                  <article>
                    <section>
                      <div>
                        <h3>{attack.name}</h3>
                      </div>
                      <h3>{attack.damage}</h3>
                    </section>
                    <p>{attack.text}</p>
                  </article>)
                })
              }
            </section>
          </article>
        </section>
        <div className={`bottom ${transitionType}`}></div>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  cardInfoDisplay: bool => dispatch(cardInfoDisplay(bool))
})

export default connect(null, mapDispatchToProps)(CardInfo)