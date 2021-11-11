import Image from 'next/image';
import styles from '../styles/Hero.module.scss';
import { CgSearch } from 'react-icons/cg';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.main}>
        <h1>Trocas e doações sem preocupações!</h1>
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

      <Image
        className={styles.image}
        src='/hero.png'
        alt='Imagem ilustrativa'
        width={738}
        height={548}
        quality='100'
      />
    </div>
  );
}
