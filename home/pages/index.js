import Head from "next/head";

import Header from "../components/Header";

const Home = () => (
  <div>
    <Head>
      <title>Home App</title>
    </Head>
    <Header info="called Locally" />
  </div>
);

export default Home;
