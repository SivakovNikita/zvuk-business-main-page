import styles from './Player.module.scss';
import { usePlayer } from './usePalyer';
import { FaPlay, FaPause } from 'react-icons/fa';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import getFormattedTime from './getFormattedTime';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';

const trackList = [
  { title: 'Share The Love', src: '/Tracks/Share The Love.mp3', durations: 30 },
  { title: 'Alright', src: '/Tracks/Alright.mp3', durations: 30 },
];

const PlayerBar = () => {
  const {
    isPlaying,
    pause,
    play,
    next,
    prev,
    seekTime,
    volume,
    currentVolume,
    currentTime,
    currentTrack,
    isPrevDisabled,
    isNextDisabled,
    trackDuration,
    currentTrackDuration,
  } = usePlayer({
    queue: trackList,
    startIndex: 0,
    repeat: 'all',
  });

  return (
    <div className={styles.player_container}>
      <div className={styles.player_info}>
        <span className={styles.title}>{currentTrack.title}</span>
        <span className={styles.time}>{currentTime ? currentTime : '00:00'}</span>
      </div>

      <div className={styles.player_navigation}>
        <button className={styles.btn_navigate} disabled={isPrevDisabled} onClick={prev}>
          <TbPlayerTrackPrevFilled />
        </button>
        <button className={styles.btn_play_pause} onClick={isPlaying ? pause : play}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className={styles.btn_navigate} onClick={next} disabled={isNextDisabled}>
          <TbPlayerTrackNextFilled />
        </button>
      </div>
      <div className={styles.inputs_wrapper}>
        <input
          className={styles.track_range}
          onInput={seekTime}
          type="range"
          min="0"
          max={trackDuration}
          value={currentTrackDuration}
        />

        <div className={styles.volume_control}>
          <div className={styles.icon_wrapper}>
            {currentVolume !== 0 ? <FaVolumeUp /> : <FaVolumeMute />}
            <input
              className={styles.volume_slider}
              onInput={volume}
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={currentVolume}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;