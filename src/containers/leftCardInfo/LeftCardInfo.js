import React, { Component } from "react";
import { connect } from "react-redux";

export class LeftCardInfo extends Component {
  constructor() {
    super();
    this.state = {
      test: "test"
    }
  }

  render() {
    const { pokemon, transitionType} = this.props;
    return (
      <section className={`left ${transitionType}`}>
        {
          !this.props.loadingDisplay ? (
            <article style={{height: "100%"}}>
              <div className="pokemon-name">
                <h2>{pokemon.name}</h2>
                <div className="pokemon-hp-mobile">
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
              </div>
              <div className="image-container">
                <img src={pokemon.imageUrlHiRes}  alt="card"/>
              </div>
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

export default connect(mapStateToProps)(LeftCardInfo)