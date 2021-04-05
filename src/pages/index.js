import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Header from "../components/header";
import Section from "../components/sectionContent";

export default function Home() {
  const data = [
    {
      category: "blog",
      name: "Ultimos Artigos",
      items: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 12",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 11",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 10",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 9",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 8",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 7",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 6",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 5",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 4",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 3",
        },
      ],
    },
    {
      category: "portfolio",
      name: "Portfólio",
      items: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 12",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 11",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 10",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 9",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 8",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 7",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 6",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 5",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 4",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 3",
        },
      ],
    },
    {
      category: "courses",
      name: "Projetos",
      items: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 12",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 11",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 10",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 9",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 8",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 7",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 6",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 5",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 4",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 3",
        },
      ],
    },
    {
      category: "projects",
      name: "Cursos",
      items: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 12",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 11",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 10",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 9",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 8",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 7",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 6",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 5",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 4",
        },
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          date: "oct 3",
        },
      ],
    },
  ];

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
        <Section />
      </main>

      <footer className={styles.footer}>
        <p>® Rychillie 2021</p>
      </footer>
    </div>
  );
}
