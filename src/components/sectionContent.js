import React from "react";
import Link from "next/link";
import styles from "../styles/SectionContent.module.css";

export default function sectionContent({ posts }) {
  if (posts === "undefined") return null;
  // const blogCategory = props.params;

  const postList = posts;

  const newPostList = postList.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
  console.log(newPostList);

  return (
    <section className={styles.container}>
      <div className={styles.listPost}>
        <h3 className={styles.sectionTitle}>
          Ultimos artigos
          <Link href="/">
            <a>Ver todos</a>
          </Link>
        </h3>

        {!newPostList && <div>No posts!</div>}
        <ul>
          {newPostList &&
            newPostList.map((post) => {
              return (
                <li key={post.slug}>
                  {/* toISOString */}
                  {new Date(post.frontmatter.date).toLocaleString("pt-BR", {
                    day: "numeric",
                    month: "short",
                  })}
                  : {` `}
                  <Link href={{ pathname: `/${post.slug}` }}>
                    <a>{post?.frontmatter?.title}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
