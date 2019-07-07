import React, { Component } from "react";
import { connect } from "react-redux";
import { cardInfoDisplay, loading } from "../../actions";

export class CardInfo extends Component {
  constructor(){
    super();
    this.state = {
      pokemon: {attacks: [], types: [], retreatCost: [], resistances: [], weaknesses: []},
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
    this.props.loading(true)
    const response = await fetch(`https://api.pokemontcg.io/v1/cards/${id}`);
    const pokemon = await response.json();
    this.props.loading(false)
    this.setState({
      pokemon: pokemon.card
    })
  }

  render() {
    console.log(this.state.pokemon);
    const { pokemon, transitionAnimation} = this.state;
    const transitionType = transitionAnimation ? "transition-to-card" : "load-to-card";
    return(
      <section className="card-info">
        <div className={`top ${transitionType}`}></div>
        <section className={`left ${transitionType}`}>
          <div className="pokemon-name">
            <h2>{pokemon.name}</h2>
          </div>
          <div className="image-container">
            <img src={pokemon.imageUrlHiRes}  alt="card"/>
          </div>
        </section>
        <section className={`right ${transitionType}`}>
          <article>
            <div className="pokemon-hp">
              <h2>{`HP ${pokemon.hp}`}</h2>
              {
                pokemon.types.map((type, i) => {
                  return(<img key={`type-${i}`}src={require(`../../assets/${type}.png`)} alt={type} />)
                })
              }
            </div>
            <section className="move-info">
              {
                pokemon.ability ? (
                 <article className="ability">
                    <div>
                      <h3>{pokemon.ability.type}</h3>
                      <h3>{pokemon.ability.name}</h3>
                    </div>
                    <p>{pokemon.ability.text}</p>
                 </article>
                ) : null
              }
              {
                pokemon.attacks.map((attack, i) => {
                  return(
                  <article key={`attack-${i}`} className="attack">
                    <section className="attack-info">
                      <div className="attack-name-cost">
                        {
                          attack.cost.map((cost, i) => {
                            return(<img key={`cost-${i}`} src={require(`../../assets/${cost}.png`)} alt={cost} />)
                          })
                        }
                        <h3>{attack.name}</h3>
                      </div>
                      <h3>{attack.damage}</h3>
                    </section>
                    <p>{attack.text}</p>
                  </article>)
                })
              }
            </section>
            <section className="stats">
                <article>
                  <h3>Weakness</h3>
                  {
                    pokemon.weaknesses ? pokemon.weaknesses.map((weak, i) => {
                      return(<div className="weaknesses">
                        <img key={`type-${i}`}src={require(`../../assets/${weak.type}.png`)} alt={weak.type} />
                        <p>{weak.value}</p>
                      </div>
                      )
                    }) : null
                  }
                </article>
                <article>
                  <h3>Resistance</h3>
                  {
                    pokemon.resistances ? pokemon.resistances.map((resist, i) => {
                      return(<div className="resistances">
                        <img key={`type-${i}`}src={require(`../../assets/${resist.type}.png`)} alt={resist.type} />
                        <p>{resist.value}</p>
                      </div>
                      )
                    }) : null
                  }
                </article>
                <article>
                  <h3>Retreat Cost</h3>
                  {
                    pokemon.retreatCost ? pokemon.retreatCost.map((cost, i) => {
                      return(<img key={`type-${i}`}src={require(`../../assets/${cost}.png`)} alt={cost} />)
                    }) : null
                  }
                </article>
            </section>
          </article>
        </section>
        <div className={`bottom ${transitionType}`}></div>
      </section>
    )
  }

  componentWillUnmount() {
    this.props.cardInfoDisplay(false)
  }
}

const mapDispatchToProps = (dispatch) => ({
  cardInfoDisplay: bool => dispatch(cardInfoDisplay(bool)),
  loading: bool => dispatch(loading(bool))
})

export default connect(null, mapDispatchToProps)(CardInfo)