import Header from '../../components/Header/Header';
import MainBlock from './blocks/MainBlock/MainBlock';
import ResultsBlock from './blocks/ResultsBlock/ResultsBlock';
import FAQBlock from './blocks/FAQBlock/FAQBlock';
import SalseCardsBlock from './blocks/SalesCardsBlock/SalesCardsBlock';
import TariffsBlock from './blocks/TariffsBlock/TariffsBlock';
import PlayerBlock from './blocks/PalyerBlock/PalyerBlock';

function MyApp() {
  return (
    <>
      <Header />
      <div id="portal"></div>
      <MainBlock />
      <TariffsBlock />
      <PlayerBlock />
      <SalseCardsBlock />
      <ResultsBlock />
      <FAQBlock />
    </>
  );
}

export default MyApp;
