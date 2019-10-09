import React from "react";
import HTTPStatus from "http-status";
import Head from "next/head";
import PageHeading from "../components/Global/PageHeading";
import Header from "../components/Header";
import styles from "../components/Global/global.scss";

function Error(props) {
  const { statusCode } = props;
  const title =
    statusCode === 404
      ? "We can't seem to find the page you're looking for."
      : HTTPStatus[statusCode] || "Oh dear, an error has occurred.";

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Error</title>
      </Head>
      <div>
        <Header />
        <PageHeading>Oh dear! We have a slight problem...</PageHeading>
        <div className="wide-content">
          <div className="container">
            <h2>{statusCode ? statusCode : null} error</h2>
          </div>
        </div>
        <div className="wide-content">
          <div className="container">
            <p>{title}</p>
          </div>
        </div>
      </div>
      <style jsx global>
        {styles}
      </style>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
