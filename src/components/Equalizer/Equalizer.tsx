import React from 'react';
import styles from './Equalizer.module.scss';

const Equalizer: React.FC = () => {
  return (
    <div className={styles.equalizer_wrapper}>
      <span className={`${styles.playing__bar} ${styles.playing__bar1}`}></span>
      <span className={`${styles.playing__bar} ${styles.playing__bar3}`}></span>
      <span className={`${styles.playing__bar} ${styles.playing__bar2}`}></span>
      <span className={`${styles.playing__bar} ${styles.playing__bar4}`}></span>
    </div>
  );
};

export default Equalizer;
