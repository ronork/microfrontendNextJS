import Head from "next/head";
import { useState } from "react";
import Product from "../components/Product";
const Header = (await import("home/Header")).default;

const FooterView = (await import("footer/FooterView")).default;

const PDP = () => {
  const [bgColor, updateColor] = useState("");

  return (
    <div>
      <Head>
        <title>PDP App</title>
      </Head>

      <Header bgColor={bgColor} info="consumed Remotely" />
      <Product />
      <FooterView updateColor={updateColor} info="consumed Remotely" />
      <style global jsx>
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}
      </style>
    </div>
  );
};

export default PDP;
