import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import PlayerList from "./PlayerList";
import SelectionModal from "./SelectionModal";

const PLAYERS_DISPLAY_COUNT = 6;
const MAX_GUESSES = 10;
const API_URL =
  "https://cors-anywhere.herokuapp.com/https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json";

class MinigameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersSearch: {
        isLoaded: false,
        isLoading: false,
        isError: false,
        players: [],
        teams: []
      },
      selectionModal: false
    };

    this.startGame = this.startGame.bind(this);
    this.showSelectionModal = this.showSelectionModal.bind(this);
  }

  startGame = () => {
    // Set Loading state
    this.setState({
      playersSearch: {
        isLoaded: false,
        isLoading: true,
        isError: false,
        players: [],
        teams: [],
        guesses: 0,
        answer: 0
      },
      selectionMatch: false,
      selectionOver: false
    });

    fetch(API_URL)
      .then(r => r.json())
      .then(data => {
        var players = data.players ? data.players : {};
        const teams = data.teams ? data.teams : {};
        let highScore = 0;

        if (players) {
          // Filter out those without a score and Randomize the results
          players = players
            .filter(player => player.fppg && player.fppg > 0)
            .sort(() => 0.5 - Math.random());

          // Cut results to size
          players = players.slice(0, PLAYERS_DISPLAY_COUNT);

          // Get high score before we randomize
          highScore = players.sort(
            (a, b) => parseFloat(b.fppg) - parseFloat(a.fppg)
          )[0].fppg;

          // Randomize the results again
          players = players.sort(() => 0.5 - Math.random());
        }

        this.setState({
          playersSearch: {
            isLoaded: true,
            isLoading: false,
            isError: false,
            players: players,
            teams: teams,
            answer: highScore,
            guesses: 0
          }
        });
      });
  };

  showSelectionModal(_player) {
    if (this.state.selectionModal) {
      // Closing the modal
      this.setState({
        selectionModal: false,
        selectionPlayer: null
      });
    } else {
      // Opening the modal
      if (this.state.selectionOver) return;

      const player = _player || {};
      const currentGuesses = (this.state.playersSearch.guesses || 0) + 1;
      const isMatch = this.state.playersSearch.answer === player.fppg;
      const gameOver = isMatch || currentGuesses >= MAX_GUESSES;

      this.setState({
        selectionModal: true,
        selectionPlayer: player,
        selectionMatch: isMatch,
        selectionOver: gameOver,
        playersSearch: {
          ...this.state.playersSearch,
          ...{ guesses: currentGuesses }
        }
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="wide-content">
          <div className="container">
            <h2>Objective</h2>
            <p>
              From {PLAYERS_DISPLAY_COUNT} randomly selected players pick the
              one that you think has the highest FPPG (Fanduel Points Per Game).
            </p>
            {!this.state.playersSearch.isLoaded &&
            !this.state.playersSearch.isLoading ? (
              <center>
                <a className="form-button" onClick={this.startGame}>
                  Start
                </a>
              </center>
            ) : null}
            &nbsp;
          </div>
        </div>
        <div className="container">
          <PlayerList
            playersSearch={this.state.playersSearch}
            startGameHandler={this.startGame}
            showSelectionModal={this.showSelectionModal}
            gameOver={this.state.selectionOver}
          />
        </div>
        <SelectionModal
          open={this.state.selectionModal}
          player={this.state.selectionPlayer}
          showSelectionModal={this.showSelectionModal}
          guesses={this.state.playersSearch.guesses}
          maxGuesses={MAX_GUESSES}
          isMatch={this.state.selectionMatch}
          gameOver={this.state.selectionOver}
        />
      </React.Fragment>
    );
  }
}

export default MinigameContainer;
