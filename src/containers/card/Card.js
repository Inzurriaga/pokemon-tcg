import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Card extends Component {
  render() {
    return (
      <NavLink to={`/pokemon/${this.props.card.id}`} className="cards-link">
          <img src={this.props.card.imageUrl} alt="cards"/>
      </NavLink>
    )
  }
}