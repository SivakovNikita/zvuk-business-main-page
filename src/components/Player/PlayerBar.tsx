import styles from './PlayerBar.module.scss';
import { usePlayer } from './usePalyer';
import useMediaSession from './useMediaSession';
import getFormattedTime from './getFormattedTime';
import { FaPlay, FaPause } from 'react-icons/fa';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';
import ProgressBar from '../ProgressBar/ProgressBar';
import { trackList } from './trackList/trackList';
import clsx from 'clsx';
import Timer from '../Timer/Timer';
import { useMemo } from 'react';
import React from 'react';
import Tracklist from '../TrackList/TrackList';
import { TrackProvider } from './TrackContex';

const PlayerBar = () => {
  const {
    isPlaying,
    pause,
    play,
    next,
    prev,
    adjustVolume,
    handleSeek,
    currentVolume,
    currentTrackIndex,
    isPrevDisabled,
    isNextDisabled,
    trackDuration,
    currentTrackDuration,
  } = usePlayer({
    queue: trackList,
    startIndex: 0,
    repeat: 'none',
  });

  const track = useMemo(
    () => ({
      title: trackList[currentTrackIndex].title,
      artist: trackList[currentTrackIndex].artist,
      artwork: trackList[currentTrackIndex].img,
      next: isNextDisabled,
      prev: isPrevDisabled,
    }),
    [currentTrackIndex],
  );

  useMediaSession({
    track,
    onPlay: play,
    onPause: pause,
    onPreviousTrack: prev,
    onNextTrack: next,
  });

  const formattedTime = getFormattedTime(currentTrackDuration);

  return (
    <div className={styles.player_container}>
      <div className={styles.player_info}>
        <div className={styles.image_container}>
          <img
            className={clsx({ [styles.image]: true, [styles.image__active]: isPlaying })}
            src={track.artwork[0].src}
          ></img>
        </div>
        <span className={styles.title}>{track.title}</span>
        <span className={styles.title}>{track.artist}</span>
        <Timer formattedTime={formattedTime} />
      </div>
      <div className={styles.player_navigation}>
        <button className={styles.btn_navigate} disabled={isPrevDisabled} onClick={prev}>
          <TbPlayerTrackPrevFilled />
        </button>
        <button className={styles.btn_play_pause} onClick={isPlaying ? pause : play}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className={styles.btn_navigate} onClick={() => next()} disabled={isNextDisabled}>
          <TbPlayerTrackNextFilled />
        </button>
      </div>

      <div className={styles.controls_wrapper}>
        <ProgressBar currentTime={currentTrackDuration} duration={trackDuration} onSeek={handleSeek} />

        <div className={styles.volume_control}>
          <div className={styles.icon_wrapper}>
            {currentVolume !== 0 ? <FaVolumeUp /> : <FaVolumeMute />}
            <input
              className={styles.volume_slider}
              onChange={adjustVolume}
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={currentVolume}
            />
          </div>
        </div>
      </div>
      <TrackProvider
        trackList={trackList}
        play={play}
        pause={pause}
        next={next}
        state={isPlaying}
        currentIndex={currentTrackIndex}
      >
        <Tracklist />
      </TrackProvider>
    </div>
  );
};

export default PlayerBar;
