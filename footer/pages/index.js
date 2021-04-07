import Head from "next/head";

import FooterView from "../components/FooterView";

const Footer = () => (
  <div>
    <Head>
      <title>Footer App</title>
    </Head>
    <FooterView info="called Locally" />
  </div>
);

export default Footer;
