import React from "react";

export default function PageHeading(props) {
  return (
    <div className="pageHeadingContainer">
      <div className="container">
        <div className="row">
          <h1>{props.children}</h1>
        </div>
      </div>
    </div>
  );
}
