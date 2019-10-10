import React, { Component } from "react";
import PlayerListItem from "../PlayerListItem";
import Loader from "../Loader";

import styles from "./playerSearch.scss";

export default function PlayerList(props) {
  if (
    !props ||
    !props.playersSearch ||
    (!props.playersSearch.isLoaded && props.playersSearch.isLoading)
  ) {
    return null;
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
    const style = {
      float: "right"
    };
    return (
      <div className="container">
        <div className="player-search">
          <a className="form-button btn-lighter" style={style}>
            Reload
          </a>
          <h2>Players</h2>
          {props.playersSearch.players.map((player, i) => {
            return <PlayerListItem player={player} key={i} />;
          })}
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  } else {
    return null;
  }
}
