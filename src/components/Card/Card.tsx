import React from 'react';
import styles from './Card.module.css';

export default function({backgroundImage, playListImage, text = "для кафе"}) {
    return (
    <>
        <div className={styles.background}>
            <div className={styles.background_image}>
                <div className={styles.transparent_block}>
                        <div className={styles.text_container}>
                            <h2>Музыка</h2>
                            <h3>{text}</h3>
                        </div>
                    <div className={styles.playlist_image}></div>
                </div>
            </div>
        </div> 
    </>
    )
}