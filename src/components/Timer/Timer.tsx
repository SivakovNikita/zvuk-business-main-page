import styles from './Timer.module.scss';

const Timer = ({ formattedTime }) => {
  return (
    <div className={styles.timer_wrapper}>
      <span className={styles.timer_wrapper_span}>{formattedTime.min ? formattedTime.min : '00'}</span>
      <span>:</span>
      <span>{formattedTime.sec ? formattedTime.sec : '00'}</span>
    </div>
  );
};

export default Timer;
