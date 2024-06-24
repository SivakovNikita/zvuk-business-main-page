import styles from './SalesCardsBlock.module.scss';
import { salesCardsData } from './Data/SalesCardsData';
import AudioAdsCard from '../../../../components/AudioAdsCard/AudioAdsCard';

const SalseCardsBlock = () => {
    
    return (
        <div className={styles.cards_block_container}>
            <span className={styles.saels_cards_header}>Увеличивайте продажи<br/>с помощью аудиорекламы</span>
            <div className={styles.cards_wrapper}>
                {salesCardsData.map((cardData) => (
                    <AudioAdsCard cardData={ cardData } key={cardData.id}/>
                ))}
            </div>
        </div>
    );
};

export default SalseCardsBlock;