import React, { Component } from "react";

export default class LeftCardInfo extends Component {
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
        <div className="pokemon-name">
          <h2>{pokemon.name}</h2>
        </div>
        <div className="image-container">
          <img src={pokemon.imageUrlHiRes}  alt="card"/>
        </div>
      </section>
    )
  }
}