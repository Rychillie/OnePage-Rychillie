import styles from "../styles/CardPost.module.css";
import Image from "next/image";

export default function CardPost({ type }) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.infoCard}>
        <span className={styles.categoryCard}>Lorem ipsum</span> •{" "}
        <span className={styles.dateCard}>03/10/1996</span>
      </div>
      <h3 className={styles.titleCard}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit
      </h3>
      <span className={`${styles.imageType} ${styles[type]}`} />
    </div>
  );
}
