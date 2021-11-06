import styles from '../styles/SearchArea.module.scss';
import { CgSearch } from 'react-icons/cg';

export default function SearchArea() {
  return (
    <div className={styles.searcharea}>
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
  );
}
