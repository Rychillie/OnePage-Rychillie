import styles from "../styles/Header.module.css";
import Image from "next/image";

import Social from "./social";

export default function Header({ manutencao, props }) {
  return (
    <header
      className={`${
        manutencao
          ? `${styles.apresentation} ${styles.center}`
          : styles.apresentation
      }`}
    >
      <div className={styles.containerHeader}>
        <div className={styles.profile}>
          <Image
            src="/rychillie.png"
            alt="Rychillie Umpierre de Oliveira"
            width={220}
            height={220}
            loading="lazy"
            layout="responsive"
          />
          <div className={styles.shadow}>
            <Image
              src="/rychillie.png"
              alt="Rychillie Umpierre de Oliveira"
              width={220}
              height={220}
              loading="lazy"
              layout="responsive"
            />
          </div>
        </div>
        <div className={styles.about}>
          <h1>
            Olá 👋, eu sou <span>Rychillie</span>
          </h1>
          <p>
            Desenvolvedor Frontend, estudante de UI/UX Design e criador de
            conteúdo, compartilhando seu conhecimento com a comunidade.
          </p>
        </div>
        <Social />
      </div>
    </header>
  );
}
