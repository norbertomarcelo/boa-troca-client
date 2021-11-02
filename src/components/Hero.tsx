import styles from '../styles/Hero.module.scss';
import { CgSearch } from 'react-icons/cg';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.main}>
        <h2>Trocas e doações sem preocupações!</h2>
        <p>
          Para aquelas compras feitas por impulso, compras esporádicas ou até
          aquelas que perderam o interesse com o tempo.
        </p>
        <form action='#'>
          <input
            type='text'
            name='Area de pesquisa'
            placeholder='Procurando por algo?'
          />
          <button>
            <CgSearch />
          </button>
        </form>
      </div>
      <img src='/hero.png' alt='Imagem ilustrativa' />
    </div>
  );
}
