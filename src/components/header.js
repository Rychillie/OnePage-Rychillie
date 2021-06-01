import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header(props) {
  return (
    <header className={styles.apresentation}>
      <div>
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
            conteúdo compartilhando seu conhecimento de forma totalmente
            gratuita, com o intuito de ajudar a comunidade, ao mesmo tempo
            trabalhando em projetos OpenSource que ajudem no caminho dessa
            comunidade maravilhosa!
          </p>
        </div>
      </div>
    </header>
  );
}
