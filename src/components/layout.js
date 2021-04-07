import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/Home.module.css";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
