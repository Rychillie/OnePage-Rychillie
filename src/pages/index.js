import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.articles}>
            <h3 className={styles.sectionTitle}>
              Ultimos Artigos
              <Link href="/">
                <a>Ver todos</a>
              </Link>
            </h3>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.courses}>
            <h3 className={styles.sectionTitle}>
              Cursos
              <Link href="/">
                <a>Ver todos</a>
              </Link>
            </h3>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.portfolio}>
            <h3 className={styles.sectionTitle}>
              Portfólio / Projetos
              <Link href="/">
                <a>Ver todos</a>
              </Link>
            </h3>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>® Rychillie 2021</p>
      </footer>
    </div>
  );
}
