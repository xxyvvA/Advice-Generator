import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "../components/Head";
import styles from "../styles/Home.module.scss";

//{"slip": { "id": 16, "advice": "It's unlucky to be superstitious."}}

interface QuoteResponse {
  slip: {
    id: number;
    advice: string;
  };
}

const Home: NextPage = () => {
  const [saying, setSaying] = useState<QuoteResponse>();

  async function quote() {
    const word = await fetch("https://api.adviceslip.com/advice");
    const json: QuoteResponse = await word.json();
    setSaying(json);
  }

  useEffect(() => {
    quote();
  }, []);

  return (
    <>
      <Head />
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.number}>Advice #{saying?.slip.id}</p>
          <p className={styles.quote}>"{saying?.slip.advice}"</p>
        </div>

        <img src="/img/pattern-divider-mobile.svg" />

        <button className={styles.button} onClick={() => quote()}>
          <img src="/img/icon-dice.svg" />
        </button>
      </div>
    </>
  );
};

export default Home;
