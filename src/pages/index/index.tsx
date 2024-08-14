import Header from '../../components/Header/Header';
import MainBlock from './blocks/MainBlock/MainBlock';
import ResultsBlock from './blocks/ResultsBlock/ResultsBlock';
import FAQBlock from './blocks/FAQBlock/FAQBlock';
import SalseCardsBlock from './blocks/SalesCardsBlock/SalesCardsBlock';
import TariffsBlock from './blocks/TariffsBlock/TariffsBlock';
import Player from '../../components/Player/Player';
import PlayerBar from '../../components/Player2.0/PlayerBar';

function MyApp() {
  return (
    <>
      <Header />
      <div id="portal"></div>
      <PlayerBar />
      {/* <MainBlock />
      <Player />
      <TariffsBlock />
      <SalseCardsBlock />
      <ResultsBlock />
      <FAQBlock /> */}
    </>
  );
}

export default MyApp;
