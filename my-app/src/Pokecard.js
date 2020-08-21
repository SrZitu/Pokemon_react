import React, { Component } from "react";
import "./pokecard.scss";
const Poke = "https://randomuser.me/api/portraits/women/";
export default class Pokecard extends Component {
  render() {
    let imgsrc = `${Poke}${this.props.id}.jpg`;
    return (
      <div className="col-lg-3">
        <div className="Pokecard">
          <h1 className="Pokecard-title">{this.props.name}</h1>
          <div className="Pokecard-img">
            <img src={imgsrc} alt="" />
          </div>

          <h2 className="Pokecard-data">Profession:{this.props.type}</h2>
          <h3 className="Pokecard-data">Experience:{this.props.exp}</h3>
        </div>
      </div>
    );
  }
}
