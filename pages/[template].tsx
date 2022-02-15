import { GetServerSidePropsContext, NextPage } from "next";
import styles from "./index.module.scss";

const Template: NextPage = () => {
  return <div className={styles.container}></div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: "",
  };
}
