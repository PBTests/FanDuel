import React, { Component } from "react";
import utils from "../../../utils/utils.js";

import styles from "./playerListItem.scss";

export default function PlayerListItem(props) {
  const hasThumb = props.player.images && props.player.images.default;
  const thumbURLStyle = {
    backgroundImage: hasThumb
      ? `url(${props.player.images.default.url})`
      : "none"
  };
  return (
    <div
      className="player"
      onClick={props.showSelectionModal.bind(null, props.player)}
    >
      <div>
        <div
          className={`image${!hasThumb ? " placeholder" : ""}`}
          style={hasThumb ? thumbURLStyle : null}
        ></div>
        <div className="details">
          <div className="name">{`${props.player.first_name} ${props.player.last_name}`}</div>
          <div className="right grey">{props.player.position}</div>
          <div className="grey">
            Salary: ${utils.numberWithCommas(props.player.salary)}
          </div>
          <div className="grey">
            Team:{" "}
            {
              props.teams.filter(
                team => team.id == props.player.team._members[0]
              )[0].name
            }
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}
