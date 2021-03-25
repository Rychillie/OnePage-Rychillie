import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rychillie | Desenvolvedor Frontend & UI Designer</title>
        <link rel="icon" href="/ok_rychillie.png" />
      </Head>

      <header className={styles.header}>
        <div>
          <Image
            src="/ok_rychillie.png"
            alt="Emoji Rychillie com sinal de Ok"
            layout="intrinsic"
            loading="eager"
            quality={100}
            width="192"
            height="192"
          />
        </div>

        <div>
          <h1 className={styles.title}>
            Olá 👋, Eu sou <a href="#">Rychillie</a>
          </h1>
          <p className={styles.description}>
            Criador de conteúdo, UI Designer e Desenvolvedor FrontEnd. Sempre
            aprendendo e compartilhando conhecimento
          </p>
        </div>
      </header>

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

      <footer className={styles.footer}>
        <p>® Rychillie 2021</p>
      </footer>
    </div>
  );
}
