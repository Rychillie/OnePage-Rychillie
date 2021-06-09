import styles from "../styles/Nav.module.css";
import Link from "next/link";

export default function Navbar({ manutencao, props }) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.title}>
            <h1>🦄 Rychillie</h1>
          </a>
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link href="portfolio">
              <a>Portfólio</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
