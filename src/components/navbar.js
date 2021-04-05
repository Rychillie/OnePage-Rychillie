import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.title}>🦄 Rychillie</a>
        </Link>

        <div className={styles.menu}></div>
      </div>
    </nav>
  );
}
