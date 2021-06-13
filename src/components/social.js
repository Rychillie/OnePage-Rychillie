import styles from "../styles/Social.module.css";

export default function Social() {
  return (
    <div className={styles.social}>
      <ul className={styles.socialLinks}>
        <li>
          <a
            className={styles.twitter}
            href="https://twitter.com/rychillie"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className={styles.instagram}
            href="https://instagram.com/rychillie"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            className={styles.github}
            href="https://github.com/rychillie"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className={styles.linkedin}
            href="https://linkedin.com/in/rychillie"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
