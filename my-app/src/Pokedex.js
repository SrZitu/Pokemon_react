import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pokecard from "./Pokecard";
import "./pokedex.scss";

export default class Pokedex extends Component {
  static defaultProps = {
    worker: [
      { id: 4, name: "Shelly", type: "Model", base_experience: 22 },
      { id: 11, name: "Saran", type: "Socialist", base_experience: 12 },
      { id: 50, name: "Lelly", type: "Film Maker", base_experience: 78 },
      { id: 13, name: "Pubbi", type: "Debugger", base_experience: 8 },
      { id: 22, name: "Sayra", type: "Film Maker", base_experience: 48 },
      { id: 94, name: "Sara", type: "Web Developer", base_experience: 25 },
    ],
  };
  render() {
    return (
      <div className="Pokedex">
        <h1>Employees</h1>

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
