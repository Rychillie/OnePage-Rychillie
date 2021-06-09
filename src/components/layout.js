import Head from "next/head";
import styles from "../styles/Post.module.css";

import Navbar from "./navbar";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>
        </div>
      </main>
    </>
  );
}
