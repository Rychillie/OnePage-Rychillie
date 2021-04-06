import React from "react";
import Link from "next/link";
import styles from "../styles/SectionContent.module.css";

export default function sectionContent(props) {
  return (
    <section className={styles.container}>
      <div className={styles.listPost}>
        <h3 className={styles.sectionTitle}>
          Ultimos {props.blogCategory}
          <Link href="/">
            <a>Ver todos</a>
          </Link>
        </h3>
      </div>
    </section>
  );
}

sectionContent.getInitialProps = () => {
  return {
    blogCategory: "Artigos",
  };
};
