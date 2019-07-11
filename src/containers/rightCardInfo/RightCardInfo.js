import React, { Component } from "react";
import { connect } from "react-redux";

export class RightCardInfo extends Component {
  constructor() {
    super();
    this.state = {
      test: "test"
    }
  }

  render() {
    const { pokemon, transitionType} = this.props;
    console.log("hello world how are you", pokemon.ability)
    return (
      <section className={`right ${transitionType}`}>
        {
          !this.props.loadingDisplay ? (
            <article>
              <div className="pokemon-hp">
                {
                  pokemon.hp ? (
                    <h2>{`HP ${pokemon.hp}`}</h2>
                  ) : null
                }
                {
                  pokemon.types ? (
                    pokemon.types.map((type, i) => {
                    return(<img key={`type-${i}`}src={require(`../../assets/${type}.png`)} alt={type} />)
                  })
                  ) : null
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
                  pokemon.attacks ? (
                    pokemon.attacks.map((attack, i) => {
                    return(
                    <article key={`attack-${i}`} className="attack">
                      <section className="attack-info">
                        <div className="attack-name-cost">
                          {
                            attack.cost ? (
                              attack.cost.map((cost, i) => {
                              return(<img key={`cost-${i}`} src={require(`../../assets/${cost}.png`)} alt={cost} />)
                            })
                            ) : null
                          }
                          <h3>{attack.name}</h3>
                        </div>
                        <h3>{attack.damage}</h3>
                      </section>
                      <p>{attack.text}</p>
                    </article>)
                  })
                  ) : null
                }
                {
                  pokemon.text ? (
                    <article className="text">
                      <p>{pokemon.text[0]}</p>
                    </article>
                  ) : null
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
                      }) : "N/A"
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
                      }) : "N/A"
                    }
                  </article>
                  <article>
                    <h3>Retreat Cost</h3>
                    {
                      pokemon.retreatCost ? pokemon.retreatCost.map((cost, i) => {
                        return(<img key={`type-${i}`}src={require(`../../assets/${cost}.png`)} alt={cost} />)
                      }) : "N/A"
                    }
                  </article>
              </section>
              <section className="additional-info">
                <article>
                  <h3>Illustrator:</h3>
                  <p>{pokemon.artist}</p>
                </article>
                <article>
                  <h3>Set:</h3>
                  <p>
                  {
                    pokemon.set ? pokemon.set : "N/A"
                  }
                  </p>
                </article>
                <article>
                  <h3>Pokedex #:</h3>
                  <p>
                  {
                    pokemon.nationalPokedexNumber ? pokemon.nationalPokedexNumber : "N/A"
                  }
                  </p>
                </article>
              </section>
            </article>
          ) : null 
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  loadingDisplay: state.loadingDisplay
})

export default connect(mapStateToProps)(RightCardInfo)