import styles from './SalesCardsBlock.module.scss';
import { salesCardsData } from './Data/SalesCardsData';
import AudioAdsCard from '../../../../components/AudioAdsCard/AudioAdsCard';
import Heading from '../../../../components/Heading/Heading';

const SalseCardsBlock = () => {
  return (
    <div className={styles.cards_block_container}>
      <Heading className="subtitle" text="Увеличивайте продажи с помощью аудиорекламы" tag="h2" />
      <div className={styles.cards_wrapper}>
        {salesCardsData.map((cardData) => (
          <AudioAdsCard cardData={cardData} key={cardData.id} />
        ))}
      </div>
    </div>
  );
};

export default SalseCardsBlock;
