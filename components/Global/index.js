import React from "react";

import Header from "../Header";

import styles from "./global.scss";

export default function Navigation(props) {
  return (
    <React.Fragment>
      <Header />
      <div>
        {props.children}
        <style jsx global>
          {styles}
        </style>
      </div>
    </React.Fragment>
  );
}
