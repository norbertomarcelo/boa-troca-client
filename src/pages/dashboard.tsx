import { CgSearch } from 'react-icons/cg';

import Header from '../components/Header';
import AdArea from '../components/AdArea';
import Footer from '../components/Footer';
import SearchArea from '../components/SearchArea';

export default function DashBoard() {
  return (
    <>
      <Header />
      <SearchArea />
      <AdArea />
      <Footer />
    </>
  );
}
