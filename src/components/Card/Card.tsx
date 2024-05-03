import React from 'react';
import styles from './Card.module.css';

function Card ({text = "для кафе"}) {
    return (
    <>
        <div className={styles.background}>
                <div className={styles.transparent_block}>
                        <div className={styles.text_container}>
                            <p className={styles.text_container_heading_2}>Музыка</p>
                            <p className={styles.text_container_heading_3}>{text}</p>
                        </div>
                    <div className={styles.playlist_image}></div>
                </div>
        </div>
    </>
    )
}

export default Card;