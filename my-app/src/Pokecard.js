import React, { Component } from "react";
import "./pokecard.scss";
const Poke = "https://randomuser.me/api/portraits/women/";
export default class Pokecard extends Component {
  render() {
    let imgsrc = `${Poke}${this.props.id}.jpg`;
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={imgsrc} alt="" />
        <h1>{this.props.type}</h1>
        <h1>{this.props.exp}</h1>
      </div>
    );
  }
}
