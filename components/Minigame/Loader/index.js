import React, { Component } from "react";
import styles from "./loader.scss";

export default function Loader(props) {
  return (
    <React.Fragment>
      <div className={`lds-ellipsis${props.right ? " right" : ""}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style jsx>{styles}</style>
    </React.Fragment>
  );
}
