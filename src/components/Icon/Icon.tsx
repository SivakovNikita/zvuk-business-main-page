import React from 'react';
import styles from './Icon.module.scss';
import Image from 'next/image'

interface IconComponentProps {
    alt: string; 
    text: string;
    src: string;
}

const Icon = ({ alt, text, src }: IconComponentProps) => {
    return (
        <div className={styles.icon_container}>
            <Image
                src={src}
                width={20}
                height={20}
                alt={alt}
            />
            <div className={styles.icon_text_container }>
                <p className={styles.icon_text}>{text}</p>
            </div>
        </div>
    )
};

export default Icon;