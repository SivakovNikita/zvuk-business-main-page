import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';

interface CardComponentProps {
    text: string; 
    playlistImgSrc: string; 
    backgroundImgSrc: string;
}

const Card = ({text, playlistImgSrc, backgroundImgSrc}: CardComponentProps) => {

    return (
        <div className={styles.background} style={{"--bg-img-src" : `url(${backgroundImgSrc})` }}>
                <div className={styles.transparent_block}>
                        <div className={styles.text_container}>
                            <p className={styles.text_container_title} >Музыка</p>
                            <p className={styles.text_container_subtitle}>{text}</p>
                        </div>
                        <Image
                            src={playlistImgSrc}
                            className={styles.playlist_image}
                            width={80}
                            height={108}
                            alt="плейлист для бизнеса"
                        />
                </div>
        </div>
    )
}

export default Card;