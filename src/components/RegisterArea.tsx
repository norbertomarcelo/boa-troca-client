import styles from '../styles/RegisterArea.module.scss';

export default function LogInArea() {
  return (
    <div className={styles.reristearea}>
      <h1>Faça seu cadastro</h1>

      <form action='#'>
        <input type='text' placeholder='Nome' />

        <input type='email' placeholder='Email' />

        <input type='password' placeholder='Senha' />

        <input type='number' placeholder='Telefone' />

        <input type='number' placeholder='CPF' />

        <input type='number' placeholder='CEP' />

        <button>Entrar</button>
        <p>
          Ja tem uma conta? <a href='#'>Faca seu Log in</a>
        </p>
      </form>
    </div>
  );
}
