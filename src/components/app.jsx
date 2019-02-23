import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Board from "./board.jsx";
import Game from "./game.jsx";
import Square from "./square.jsx";

const Splash = () => {
  return (
    <div>
      <h1>Tic / Tac / Toe</h1>
      <button>Start</button>
      <img src={"../src/winner.png"} className="hidden" />
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="flex">
        <div className="left"><Splash /></div>
        <div className="right"><Game /></div>
      </div>
    );
  }
}

export default App;
