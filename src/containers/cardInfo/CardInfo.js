import React, { Component } from "react";
import { connect } from "react-redux";
import { cardInfoDisplay } from "../../actions"

export class CardInfo extends Component {

  componentDidMount() {
    this.props.cardInfoDisplay(true)
  }

  render() {
    console.log(this.props.pokemon)
    return(
      <section className="card-info">
        <p>hello im the card info</p>
      </section>
    )
  }

  componentWillUnmount() {
    this.props.cardInfoDisplay(false)
  }
}

const mapDispatchToProps = (dispatch) => ({
  cardInfoDisplay: bool => dispatch(cardInfoDisplay(bool))
})

export default connect(null, mapDispatchToProps)(CardInfo)