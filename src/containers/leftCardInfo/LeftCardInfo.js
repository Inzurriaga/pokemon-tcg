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