import React, { Component } from "react";
import Square from "./square.jsx";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      nextPlayer: true,
    }
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice();
    if (this.props.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.nextPlayer ? "X" : "O";
    this.setState({
      squares: squares,
      nextPlayer: !this.state.nextPlayer,
    });
  }

  renderSquare = (i) => {
    return (
      <Square
        value={this.state.squares[i]}
        nextPlayer={this.state.nextPlayer}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = this.props.calculateWinner(this.state.squares);
    const activePlayer = this.state.nextPlayer ? "X" : "O";
    let status;
    let image;
    if (winner) {
      status = "We have a winner!";
      image = "../src/winner.png";
    // } else {
    //   status = "Player: " + activePlayer;
    }

    return (
      <div>
      <div className="status">
        <div className={`winner ${winner}`}>{winner}</div>
        <div className="message">{status}</div>
        <img src={image} />
      </div>
        <div className="players">
          <div className={`player${this.state.nextPlayer ? " " + activePlayer : ""}`}>Player X</div>
          <div className={`player${this.state.nextPlayer ? "" : " " + activePlayer}`}>Player O</div>
        </div>
        <div className="board">
          <div className="row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
