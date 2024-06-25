import { FaCheck } from 'react-icons/fa6';
import Button from '../Button/Button';
import styles from './TariffCard.module.scss';

const TariffCard = ({ tariff }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text_wrapper}>
        <span className={styles.tariff_name}>{tariff.name}</span>

        <div className={styles.price_wrapper}>
          <span className={styles.tariff_price}> {tariff.price} ₽</span>
          <span className={styles.tariff_mounth}> /месяц</span>
        </div>

        <ul className={styles.tariff_features_list}>
          {tariff.features.map((feature) => {
            return (
              <li className={styles.feature_item}>
                <FaCheck className={styles.feature_check} />
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.btn_wrapper}>
        <Button text={tariff.btnText} />
      </div>
    </div>
  );
};

export default TariffCard;
