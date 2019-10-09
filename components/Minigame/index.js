import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

const API_URL =
  "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json";

class MinigameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.fetchPlayers = this.fetchPlayers.bind(this);
  }

  fetchPlayers = () => {
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
      .then(data => {});
  };

  render() {
    return (
      <React.Fragment>
        <div className="wide-content">Minigame container</div>
      </React.Fragment>
    );
  }
}

export default MinigameContainer;
