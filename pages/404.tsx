import type { NextPage } from "next";
import Head from "next/head";
import Gradient from "../components/Gradient";
import Link from "../components/Link";

const Custom404: NextPage = () => {
  return (
    <div className="mx-8">
      <Head>
        <title>Clock | Page not found</title>
        <meta name="description" content="Clock" />
        <link rel="icon" href="./assets/images/favicon.ico" />
      </Head>

      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <h1 className="my-8 text-6xl md:text-8xl text-center font-bold">
          <Gradient text="Page not found" /> &#128557;
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

export default Custom404;
