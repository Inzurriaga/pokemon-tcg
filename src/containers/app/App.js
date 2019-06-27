import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Home } from "../home/Home";
// import { CardInfo } from "../cardInfo/CardInfo"

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <Route path="/" component={ Home } />
      </div>
    );
  }
}

export default App;
