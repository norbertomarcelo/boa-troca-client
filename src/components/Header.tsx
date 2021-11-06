import Link from 'next/link';

import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <img src='/logo.png' alt='Boa Troca' />
      </Link>

      <div className={styles.buttonDiv}>
        <Link href='/signIn'>
          <button className={styles.signInButton}>Entrar</button>
        </Link>

        <Link href='/signUp'>
          <button className={styles.signUpButton}>Cadastre-se</button>
        </Link>
      </div>
    </header>
  );
}
