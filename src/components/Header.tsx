import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href='/' passHref>
              <Image
                src='/logo.png'
                alt='Logomarca'
                width={128}
                height={44}
                quality='100'
              />
            </Link>
          </div>

          <div className={styles.buttonDiv}>
            <Link href='/signIn' passHref>
              <button className={styles.signInButton}>Entrar</button>
            </Link>

            <Link href='/signUp' passHref>
              <button className={styles.signUpButton}>Cadastre-se</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
