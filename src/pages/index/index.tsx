import Header from '../../components/Header/Header';
import MainBlock from './blocks/MainBlock/MainBlock';
import ResultsBlock from './blocks/ResultsBlock/ResultsBlock';
import FAQBlock from './blocks/FAQBlock/FAQBlock';
import SalseCardsBlock from './blocks/SalesCardsBlock/SalesCardsBlock';
import TariffsBlock from './blocks/TariffsBlock/TariffsBlock';

function MyApp() {
  return (
    <>
      <Header />
      <MainBlock />
      <TariffsBlock />
      <SalseCardsBlock />
      <ResultsBlock />
      <FAQBlock />
    </>
  );
}

export default MyApp;
