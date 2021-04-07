import React from "react";
import Link from "next/link";
import styles from "../styles/SectionContent.module.css";

export default function sectionContent({ posts }) {
  if (posts === "undefined") return null;

  const postList = posts;

  const newPostList = postList.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );

  return (
    <section className={styles.container}>
      <div className={styles.listPost}>
        <div className={styles.sectionTitle}>
          <h3>Ultimos artigos</h3>

          <Link href="/">
            <a>Ver todos</a>
          </Link>
        </div>

        {!newPostList && <div>No posts!</div>}
        <ul>
          {newPostList &&
            newPostList.slice(0, 5).map((post) => {
              return (
                <li key={post.slug}>
                  <Link href={{ pathname: `/${post.slug}` }}>
                    <a>
                      <span>
                        {new Date(post.frontmatter.date).toLocaleString(
                          "pt-BR",
                          {
                            day: "2-digit",
                            month: "short",
                            timeZone: "UTC",
                          }
                        )}
                      </span>
                      {post?.frontmatter?.title}
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
