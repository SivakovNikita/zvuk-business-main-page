import React, { useState } from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

interface CardComponentProps {
  text: string;
  backgroundImgSrc: string;
}

const Card = ({ text, backgroundImgSrc }: CardComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx({ [styles.background]: true, [styles.background__active]: isHovered })}
      style={{ '--bg-img-src': `url(${backgroundImgSrc})` } as React.CSSProperties}
    >
      {isHovered ? (
        <div className={styles.transparent_block}>
          <div className={styles.text_container}>
            <p className={styles.text_container__title}>Музыка</p>
            <p className={styles.text_container__subtitle}>{text}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
