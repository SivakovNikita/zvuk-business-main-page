import clsx from 'clsx';
import { TrackContext } from '../Player/TrackContex';
import styles from './Track.module.scss';
import { useContext, useEffect, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const Track = ({ track, index }) => {
  const { play, pause, next, state, currentIndex } = useContext(TrackContext);
  const [status, setStatus] = useState(state && currentIndex === index);
  const [playing, setPlaying] = useState(false);
  const isCurrent = currentIndex === index;

  useEffect(() => {
    setStatus(state && currentIndex === index);
  }, [state, currentIndex, index]);

  useEffect(() => {
    if (playing !== true) {
      setPlaying(isCurrent && state);
    } else if (!isCurrent) {
      setPlaying(false);
    }
  }, [isCurrent, state]);

  return (
    <div className={clsx({ [styles.track_wrapper]: true, [styles.track_wrapper__active]: status })}>
      <div className={styles.images_wrapper}>
        <img className={styles.track_image} src={track.img[0].src} onClick={() => next(index)} />
        {playing ? (
          <button className={styles.play_pause} onClick={state ? () => pause() : () => play()}>
            {state ? <FaPause /> : <FaPlay />}
          </button>
        ) : null}
      </div>

      <div className={styles.track_name_wrapper}>
        <span className={styles.artist_title}>{track.artist}</span>
        <span className={styles.track_title}>{track.title}</span>
      </div>
      <div className={styles.track_time_wrapper}>
        <span className={styles.track_time}>{track.duration}</span>
      </div>
    </div>
  );
};

export default Track;
