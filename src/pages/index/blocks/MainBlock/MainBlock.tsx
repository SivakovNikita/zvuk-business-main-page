import Button from '../../../../components/Button/Button';
import Gallery from '../../../../components/Gallery/Gallery';
import Icons from '../../../../components/Icons/Icons'
import { galleryData } from "./data/galleryData";
import { iconsData } from "./data/iconsData";
import styles from './MainBlock.module.scss';

function MainBlock() {
    return (
        <div className={ styles.container }>
            <h1 className={ styles.title }>Аудиосервис для вашего бизнеса</h1>
            <h2 className={ styles.subtitle }>без выплат в РАО и ВОИС</h2>
            <div className={ styles.button }>
                <Button  />
            </div>
            <div className={ styles.icons }>
                <Icons  iconsData={ iconsData }/>
            </div>
            <div className={ styles.gallery }>
                <Gallery  cardsData={ galleryData }/>
            </div>
        </div>
    );
};
  
export default MainBlock;