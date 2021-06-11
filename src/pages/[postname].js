import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import styles from "../styles/Post.module.css";
import Layout from "../components/layout";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <article className={styles.content}>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../content/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  const title = data.data.title;
  const date = JSON.stringify(data.data.date);
  const category = data.data.category;
  const type = data.data.type;
  const description = data.data.description;

  return {
    props: {
      siteTitle: config.title,
      frontmatter: { title, date, category, type, description },
      date: JSON.stringify(data.data.date),
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../content", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
