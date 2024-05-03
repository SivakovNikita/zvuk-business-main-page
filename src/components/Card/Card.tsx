import React from 'react';
import styles from './Card.module.css';

function Card ({text="для кафе", palylistSrc }) {
    return (
    <>
        <div className={styles.background}>
                <div className={styles.transparent_block}>
                        <div className={styles.text_container}>
                            <p className={styles.text_container_heading_2}>Музыка</p>
                            <p className={styles.text_container_heading_3}>{text}</p>
                        </div>
                        <img 
                            src={palylistSrc} 
                            className={styles.playlist_image}>
                        </img>
                </div>
        </div>
    </>
    )
}

export default Card;