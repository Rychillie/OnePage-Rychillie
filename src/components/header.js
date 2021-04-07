import styles from "../styles/Header.module.css";
import Image from "next/image";

import Nav from "./navbar";

export default function Header(props) {
  const hasProfile = props.hasProfile;

  if (hasProfile) {
    return (
      <header className={styles.header}>
        <Nav />

        <div>
          <Image
            src="/ok_rychillie.png"
            alt="Emoji Rychillie com sinal de Ok"
            layout="intrinsic"
            loading="eager"
            quality={100}
            width="192"
            height="192"
          />
        </div>

        <div>
          <h1 className={styles.title}>
            Olá 👋, Eu sou <a href="#">Rychillie</a>
          </h1>
          <p className={styles.description}>
            Criador de conteúdo, UI Designer e Desenvolvedor FrontEnd. Sempre
            aprendendo e compartilhando conhecimento
          </p>
        </div>
      </header>
    );
  }

  return (
    <header className={styles.headerNav}>
      <Nav />
    </header>
  );
}
