import React, { Component } from "react";
import styles from "./selectionModal.scss";

export default function SelectionModal(props) {
  if (!props.player) return null;

  const className = `modal-window${props.open ? " active" : ""}`;

  return (
    <div
      id="open-modal"
      className={className}
      onClick={props.showSelectionModal}
    >
      <div>
        <div>
          <a title="Close" className="modal-close">
            Close
          </a>
        </div>
        {props.gameOver && !props.isMatch ? (
          <div className="game-over">Game over</div>
        ) : props.isMatch ? (
          <div className="game-outcome success">
            You guessed correctly! {props.player.first_name}{" "}
            {props.player.last_name} is the player with the highest FPPG!
          </div>
        ) : (
          <div className="game-outcome fail">
            You guessed incorrectly! You have {props.maxGuesses - props.guesses}{" "}
            guesses left.
          </div>
        )}
        <div className="player-details">
          <img
            src={props.player.images.default.url}
            width="100"
            className="image"
          />
          <h1>
            {props.player.first_name} {props.player.last_name}
          </h1>
          <div className="fppg">
            FPPG <span>{props.player.fppg.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}
