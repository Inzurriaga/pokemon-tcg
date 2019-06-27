import React, { Component } from "react";
import Header from "../header/Header";
import CardContainer from "../cardContainer/CardContainer"

export class Home extends Component {
  render() {
    return(
      <section>
        <Header />
        <CardContainer />
      </section>
    )
  }
}