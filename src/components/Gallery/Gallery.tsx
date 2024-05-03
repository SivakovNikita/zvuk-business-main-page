import Card from "../Card/Card";
import styles from "./Gallery.module.css";

function Gallery () {
    return (
        <div className={styles.cards_container}>
            <Card />
            <Card />
            <Card />
        </div>
    )
};

export default Gallery;