import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rychillie | Desenvolvedor Frontend & UI Designer</title>
        <link rel="icon" href="/ok_rychillie.png" />
        <meta name="robots" content="noindex" />
        <meta httpEquiv="Content-Language" content="pt-br"></meta>
        <meta
          name="description"
          content="Criador de conteúdo, UI Designer e Desenvolvedor FrontEnd. Sempre aprendendo e compartilhando conhecimento"
        />
      </Head>

      <Header />

      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <a href="#" className={styles.card}>
              <h3>Artigos &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="#" className={styles.card}>
              <h3>Projetos & Portfólio &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a href="#" className={styles.card}>
              <h3>Cursos &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a href="#" className={styles.card}>
              <h3>Newsletter &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <p>® Rychillie 2021</p>
      </footer>
    </div>
  );
}
