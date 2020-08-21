import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pokecard from "./Pokecard";
import "./pokedex.scss";

export default class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-Winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-Loser">Losing Hand</h1>;
    }

    return (
      <div className="Pokedex">
        {title}
        <h1 className="Pokedex-data">Experience: {this.props.exp}</h1>
        <div className="Pokedex-cards row">
          {this.props.worker.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
