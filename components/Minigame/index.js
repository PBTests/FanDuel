import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

const PLAYERS_DISPLAY_COUNT = 6;
const API_URL =
  "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json";

class MinigameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.startGame = this.startGame.bind(this);
  }

  startGame = () => {
    console.warn("Fetching data...");

    // Set Loading state
    setTimeout(() => {
      this.setState({
        vehicleSearch: {
          isLoaded: false,
          isLoading: true,
          isError: false,
          players: []
        }
      });
    }, 0);

    fetch(API_URL)
      .then(r => r.json())
      .then(data => {
        console.log("RES:", data);

        var players = data.players ? data.players : {};

        // Randomize the results
        if (players) players = players.sort(() => 0.5 - Math.random());

        // Cut results to size
        if (players) players = players.slice(0, PLAYERS_DISPLAY_COUNT);

        console.log("players:", players);

        this.setState({
          playerSearch: {
            isLoaded: true,
            isLoading: false,
            isError: false,
            players: players
          }
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="wide-content">
          <div className="container">
            <h2>Objective</h2>
            <p>You will be presented with {PLAYERS_DISPLAY_COUNT} players. </p>
            <p>
              Choose which player you think has the highest FPPG (Fanduel Points
              Per Game).
            </p>
            <center>
              <a className="form-button" onClick={this.startGame}>
                Start Game
              </a>
            </center>
            &nbsp;
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MinigameContainer;
