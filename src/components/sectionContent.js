import React from "react";
import Link from "next/link";
import styles from "../styles/SectionContent.module.css";

export default function sectionContent({ posts }) {
  if (posts === "undefined") return null;
  // const blogCategory = props.params;

  return (
    <section className={styles.container}>
      <div className={styles.listPost}>
        <h3 className={styles.sectionTitle}>
          Ultimos artigos
          <Link href="/">
            <a>Ver todos</a>
          </Link>
        </h3>

        {!posts && <div>No posts!</div>}
        <ul>
          {posts &&
            posts.map((post) => {
              return (
                <li key={post.slug}>
                  {post.frontmatter.date}: {` `}
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
