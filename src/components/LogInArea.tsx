import styles from '../styles/LogInArea.module.scss';

export default function LogInArea() {
  return (
    <div className={styles.loginarea}>
      <h1>Faça seu login</h1>

      <form action='#'>
        <input type='email' placeholder='Email' />

        <input type='password' placeholder='Senha' />
        <button>Entrar</button>
        <p>
          Nao tem uma conta? <a href='#'>Cadatre-se</a>
        </p>
      </form>
    </div>
  );
}
