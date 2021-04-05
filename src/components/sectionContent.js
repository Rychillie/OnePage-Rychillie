import Link from "next/link";
import styles from "../styles/SectionContent.module.css";

export default function sectionContnt() {
  return (
    <section className={styles.container}>
      <div className={styles.listPost}>
        <h3 className={styles.sectionTitle}>
          Ultimos Artigos
          <Link href="/">
            <a>Ver todos</a>
          </Link>
        </h3>
      </div>
    </section>
  );
}
