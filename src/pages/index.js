import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Header from "../components/header";
import PostList from "../components/postList";
import getPosts from "../utils/getPosts";

export default function Home({
  posts,
  title,
  description,
  manutencao = false,
  ...props
}) {
  return (
    <div className={styles.index}>
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
      <div
        className={`${
          manutencao ? `${styles.homepage} ${styles.center}` : styles.homepage
        }`}
      >
        {manutencao ? (
          <Header manutencao />
        ) : (
          <>
            <Header manutencao={false} />

            <main className={styles.main}>
              <PostList posts={posts} />
            </main>
          </>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const configData = await import(`../../siteconfig.json`);

  const posts = ((context) => {
    return getPosts(context);
  })(require.context("../../content", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
