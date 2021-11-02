import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src='/logo.png' alt='Boa Troca' />

      <div className={styles.buttonDiv}>
        <button className={styles.signInButton}>Entrar</button>
        <button className={styles.signUpButton}>Cadastre-se</button>
      </div>
    </header>
  );
}
