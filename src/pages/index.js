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
              <p>
                Um espaço onde compartilho escrevo artigos compartilhando
                conhecimento e opiniões com fins de ajudar.
              </p>
            </a>

            <a href="#" className={styles.card}>
              <h3>Projetos / Portfólio &rarr;</h3>
              <p>
                Com muitos anos de pratica vem a experiência, conheça um pouco
                da minha jornada até aqui.
              </p>
            </a>

            <a href="#" className={styles.card}>
              <h3>Cursos &rarr;</h3>
              <p>
                Conteúdo educativo em português que criei com o objetivo de
                facilitar o acesso a conteúdos técnicos.
              </p>
            </a>

            <a href="#" className={styles.card}>
              <h3>Newsletter &rarr;</h3>
              <p>
                Receba um email semanal com todos conteúdos que abordei em
                minhas redes sociais e meios de comunicação, além de dicas e
                noticias do mundo da Tecnologia.
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
