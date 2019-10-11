import React from "react";
import Head from "next/head";
import Global from "../components/Global";
import PageHeading from "../components/Global/PageHeading";
import Link from "next/link";

const pageTitle = "About This App";

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>{`FanDuel - ${pageTitle}`}</title>
      </Head>
      <div>
        <PageHeading>{pageTitle}</PageHeading>
        <div className="wide-content">
          <div className="container">
            <h2>About the project</h2>
            <p>Test for a Front-end Engineer at FanDuel</p>
            <p>
              Developed by&nbsp;
              <a href="https://paul.buon.uk/" title="Paul Buonaccorsi's CV">
                Paul Buonaccorsi
              </a>
              .
            </p>
          </div>
        </div>
        <div className="wide-content">
          <div className="container">
            <h2>Technical spec</h2>
            <ul className="text-list">
              <li>React.js (with Next.js) Isomorphic Web Application</li>
              <li>Jest testing suite</li>
              <li>SASS CSS compilation and component sandboxed CSS</li>
              <li>Server Side Rendering - entry route will SSR</li>
              <li>Page Routing and 404 errors built-in</li>
              <li>Page Templating / Master Layout with responsive HTML/CSS</li>
            </ul>
          </div>
        </div>
        <div className="wide-content">
          <div className="container">
            <h2>Issues and what can be done better</h2>
            <ul className="text-list">
              <li></li>
            </ul>
          </div>
        </div>
        <div className="wide-content">
          <div className="container">
            <h2>Getting Started</h2>
            <center>
              <Link href="/minigame">
                <a className="form-button">Go to the Minigame route</a>
              </Link>
            </center>
            &nbsp;
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
