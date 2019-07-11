import React, { Component } from "react";
import { connect } from "react-redux";
import { cardInfoDisplay, loading } from "../../actions";
import LeftCardInfo from "../leftCardInfo/LeftCardInfo";
import RightCardInfo from "../rightCardInfo/RightCardInfo";
import Loading from "../loading/Loading";

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
          <LeftCardInfo pokemon={pokemon} transitionType={transitionType} />
          <RightCardInfo pokemon={pokemon} transitionType={transitionType} />
          {
            this.props.loadingDisplay ? <Loading /> : null
          }
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

const mapStateToProps = (state) => ({
  loadingDisplay: state.loadingDisplay
})


export default connect(mapStateToProps, mapDispatchToProps)(CardInfo)