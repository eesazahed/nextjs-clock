import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Gradient from "../components/Gradient";
import Link from "../components/Link";
import { useEffect, useState } from "react";

const Clock = dynamic(() => import("../components/Clock"), { ssr: false });

const Home: NextPage = () => {
  const [militaryTime, setMilitaryTime] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMilitaryTime(
        localStorage.getItem("militaryTime") === "true" ? true : false
      );
    }
  }, []);

  const toggleMilitaryTime = () => {
    localStorage.setItem("militaryTime", String(!militaryTime));
    setMilitaryTime(!militaryTime);
  };

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
            <Clock militaryTime={militaryTime} />
          </Gradient>
        </h1>
      </main>

      <footer className="py-16 text-center">
        <p>
          Military time:{" "}
          <span
            onClick={toggleMilitaryTime}
            className="cursor-pointer text-[#09c489] dark:text-[#00f3a6]"
          >
            {militaryTime ? "on" : "off"}
          </span>
        </p>
        <br />
        <p>
          Designed and developed by{" "}
          <Link text="Eesa Zahed" href="https://eesa.zahed.ca" />
        </p>
      </footer>
    </div>
  );
};

export default Home;
