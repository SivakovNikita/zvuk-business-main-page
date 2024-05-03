import React from 'react';
import styles from './Icon.module.css';

function icon({ alt, text, src = './images/icons/music.png'}) {
    return (
        <div className={styles.icon_container}>  
            <img 
                className={styles.icon} 
                alt={alt}
                src={src}
            />
            <div className={styles.icon_text_container }>
                <p className={styles.icon_text}>{text}</p>
            </div>
        </div>
    )
};

export default icon;