import Card from "../Card/Card";
import styles from "./Gallery.module.scss";

const Gallery = ( { cardsData } ) => {

    return (
        <div className={styles.cards_container}>
            {cardsData.map((data) => (
                <Card
                    key={data.id}
                    text={data.text}
                    playlistImgSrc={data.playlistImgSrc}
                    backgroundImgSrc={data.backgroundImg}
                />
            ))}
        </div>
    );
};

export default Gallery;