import clsx from 'clsx';
import { TrackContext } from '../Player/TrackContex';
import styles from './Track.module.scss';
import { useContext, useEffect, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import Equalizer from '../Equalizer/Equalizer';

const Track = ({ track, index }) => {
  const { play, pause, next, state, currentIndex } = useContext(TrackContext);
  const [isPlaying, setIsPlaying] = useState(state && currentIndex === index);
  const [playing, setPlaying] = useState(false);
  const isCurrent = currentIndex === index;

  useEffect(() => {
    setIsPlaying(state && currentIndex === index);
  }, [state, currentIndex, index]);

  useEffect(() => {
    if (playing !== true) {
      setPlaying(isCurrent && state);
    } else if (!isCurrent) {
      setPlaying(false);
    }
  }, [isCurrent, state]);
  const [isHovered, setIsHovered] = useState(false);
  const currentTrackNotPlaying = isCurrent && !playing;
  const showPlayButton = (isHovered && !isCurrent) || (isHovered && currentTrackNotPlaying);

  // не активен
  // выбран по индексу но не играет
  // активен и играет Волны
  // активен и не играет Плей
  // активен и ховер Пауза

  return (
    <div
      className={clsx({ [styles.track_wrapper]: true, [styles.track_wrapper__active]: isPlaying })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.images_wrapper}>
        {showPlayButton ? (
          <button className={styles.play_pause} onClick={() => next(index)}>
            <FaPlay />
          </button>
        ) : null}

        <img className={styles.track_image} src={track.img[0].src} alt={'Музыка для бизнеса :' + track.artist} />
        {playing ? (
          <button className={styles.play_pause} onClick={state ? () => pause() : () => play()}>
            {state ? !isHovered ? <Equalizer /> : <FaPause /> : <FaPlay />}
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
