import Button from '../../../../components/Button/Button';
import Gallery from '../../../../components/Gallery/Gallery';
import Icons from '../../../../components/Icons/Icons';
import { galleryData } from './data/galleryData';
import { iconsData } from './data/iconsData';
import styles from './MainBlock.module.scss';

function MainBlock() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headings}>
          <span className={styles.title}>
            Аудиосервис для вашего <span className={styles.title__colored}>бизнеса</span>
          </span>
          <span className={styles.subtitle}>без выплат в РАО и ВОИС</span>
        </div>
        <div className={styles.button}>
          <Button text={'Подключить'} />
        </div>
        <div className={styles.icons}>
          <Icons iconsData={iconsData} />
        </div>
        <div className={styles.gallery}>
          <Gallery cardsData={galleryData} />
        </div>
      </div>
    </div>
  );
}

export default MainBlock;
