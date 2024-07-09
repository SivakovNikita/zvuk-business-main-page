import Heading from '../../../../components/Heading/Heading';
import TariffCard from '../../../../components/TariffCard/TariffCard';
import styles from './TariffsBlock.module.scss';
import tariffsData from './data/tariffsData';

const TariffsBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Heading className="subtitle" text="Cтоимость подписки" tag="h2" />
      </div>
      <div className={styles.tariffs_cards_wrapper}>
        {tariffsData.map((tariff) => {
          return <TariffCard tariff={tariff} />;
        })}
      </div>
    </div>
  );
};

export default TariffsBlock;
