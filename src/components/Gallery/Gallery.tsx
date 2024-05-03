import Card from "../Card/Card";
import styles from "./Gallery.module.css";

function Gallery () {
    return (
        <div className={styles.cards_container}>
            <Card text={"для кафе"} palylistSrc={"./images/playlist_cards/pop_small.png"}/>
            <Card text={"для барбершопа"} palylistSrc={"./images/playlist_cards/barbershop_small.png"}/>
            <Card text={"для ритейла"} palylistSrc={"./images/playlist_cards/shop_small.png"}/>
        </div>
    )
};

export default Gallery;