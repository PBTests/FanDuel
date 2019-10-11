import React, { Component } from "react";
import PlayerListItem from "../PlayerListItem";
import Loader from "../Loader";

import styles from "./playerList.scss";

export default function PlayerList(props) {
  if (!props || !props.playersSearch) return null;
  if (!props.playersSearch.isLoaded && props.playersSearch.isLoading) {
    return (
      <div className="container">
        <div className="player-search">
          <Loader />
          <h2>Loading players...</h2>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  } else if (props.playersSearch.isLoaded && props.playersSearch.isError) {
    return (
      <div className="container">
        <div className="player-search">
          <h2>There was a problem loading players</h2>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  } else if (
    props.playersSearch.isLoaded &&
    props.playersSearch.players.length == 0
  ) {
    return (
      <div className="container">
        <div className="player-search">
          <h2>No players could be found</h2>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  } else if (
    props.playersSearch.isLoaded &&
    props.playersSearch.players.length > 0
  ) {
    return (
      <div className="container">
        <div className="player-search">
          <a
            className="form-button btn-lighter right"
            onClick={props.startGameHandler}
          >
            Restart
          </a>
          <h2>Players</h2>
          {props.gameOver ? (
            <div className="game-over-banner">
              <center>
                The game has finished. Hit "Restart" to play again!
              </center>
            </div>
          ) : (
            props.playersSearch.players.map((player, i) => {
              return (
                <PlayerListItem
                  player={player}
                  teams={props.playersSearch.teams}
                  key={i}
                  showSelectionModal={props.showSelectionModal}
                />
              );
            })
          )}
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  } else {
    return null;
  }
}
