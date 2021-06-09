import styles from "../styles/CardPost.module.css";
import Image from "next/image";

export default function CardPost({ postDate, title, type, category }) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.infoCard}>
        <span className={styles.categoryCard}>{category}</span> •{" "}
        <span className={styles.dateCard}>{postDate}</span>
      </div>
      <h3 className={styles.titleCard}>{title}</h3>
      <span className={`${styles.imageType} ${styles[type]}`} />
    </div>
  );
}
