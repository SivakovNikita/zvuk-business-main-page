import Heading from '../../../../components/Heading/Heading';
import TariffCard from '../../../../components/TariffCard/TariffCard';
import styles from './TariffsBlock.module.scss';
import tariffsData from './data/tariffsData';

const TariffsBlock = () => {
  return (
    <div className={styles.container}>
      <Heading text="стоимость подписки" tag="h2" />
      <div className={styles.tariffs_cards_wrapper}>
        {tariffsData.map((tariff) => {
          return <TariffCard tariff={tariff} />;
        })}
      </div>
    </div>
  );
};

export default TariffsBlock;
