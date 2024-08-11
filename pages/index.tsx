import type { NextPage } from "next";
import Head from "next/head";
import Gradient from "../components/Gradient";
import Link from "../components/Link";
import Clock from "../components/Clock";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Clock</title>
        <meta name="description" content="Clock" />
        <link rel="icon" href="./assets/images/favicon.ico" />
      </Head>

      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <h1 className="text-7xl md:text-9xl text-center font-bold">
          <Gradient>
            <Clock />
          </Gradient>
        </h1>
      </main>

      <footer className="py-16 text-center">
        <p>
          Designed and developed by{" "}
          <Link text="Eesa Zahed" href="https://eesa.zahed.ca" />
        </p>
      </footer>
    </div>
  );
};

export default Home;
