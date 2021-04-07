import Head from "next/head";
import Product from "../components/Product";
const Header = (await import("home/Header")).default;

const FooterView = (await import("footer/FooterView")).default;

const PDP = () => (
  <div>
    <Head>
      <title>PDP App</title>
    </Head>

    <Header info="consumed Remotely" />
    <Product />
    <FooterView info="consumed Remotely" />
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

export default PDP;
