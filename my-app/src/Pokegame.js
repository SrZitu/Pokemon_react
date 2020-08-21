import React, { Component } from "react";
import Pokedex from "./Pokedex";
export default class Pokegame extends Component {
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
    let hand1 = [];
    let hand2 = [...this.props.worker];
    while (hand1.length < hand2.length) {
      let randinde = Math.floor(Math.random() * hand2.length);
      let poko1 = hand2.splice(randinde, 1)[0];
      hand1.push(poko1);
    }
    let exp1 = hand1.reduce((exp, poko1) => exp + poko1.base_experience, 0);
    let exp2 = hand2.reduce((exp, poko1) => exp + poko1.base_experience, 0);
    return (
      <div>
        <Pokedex worker={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex worker={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}
