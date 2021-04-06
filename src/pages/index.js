import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Header from "../components/header";
import Section from "../components/sectionContent";

import getPosts from "../utils/getPosts";

export default function Home({ posts, title, description, ...props }) {
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
        <Section posts={posts} params={props.blogCategory} />
      </main>

      <footer className={styles.footer}>
        <p>® Rychillie 2021</p>
      </footer>
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
