import React, { Component } from "react";
import "./pokecard.scss";
const Poke = "https://randomuser.me/api/portraits/women/";
export default class Pokecard extends Component {
  render() {
    let imgsrc = `${Poke}${this.props.id}.jpg`;
    return (
      <div className="col-lg-4">
        <div className="Pokecard">
          <h1>{this.props.name}</h1>
          <img src={imgsrc} alt="" />
          <h2>{this.props.type}</h2>
          <h3>{this.props.exp}</h3>
        </div>
      </div>
    );
  }
}
