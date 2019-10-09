import React from "react";
import Head from "next/head";
import Global from "../components/Global";
import PageHeading from "../components/Global/PageHeading";

import Link from "next/link";

const pageTitle = "Mini-Game";

export default function Minigame() {
  return (
    <React.Fragment>
      <Head>
        <title>{`FanDuel - ${pageTitle}`}</title>
      </Head>
      <div>
        <PageHeading>{pageTitle}</PageHeading>
      </div>
    </React.Fragment>
  );
}
