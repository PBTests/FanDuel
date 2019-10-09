import React from "react";
import Link from "next/link";

import stylesHeader from "./header.scss";

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div>
            <Link href="/">
              <a className="ac-brand">FanDuel</a>
            </Link>
          </div>

          <div className="nav-right">
            <ul>
              <li>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/minigame">
                  <a>Mini-Game</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{stylesHeader}</style>
    </header>
  );
}
