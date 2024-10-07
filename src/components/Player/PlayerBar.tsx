import styles from './PlayerBar.module.scss';
import { usePlayer } from './usePalyer';
import useMediaSession from './useMediaSession';
import { FaPlay, FaPause } from 'react-icons/fa';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';
import ProgressBar from '../ProgressBar/ProgressBar';
import { trackList } from './trackList/trackList';
import clsx from 'clsx';
import { useCallback, useMemo } from 'react';
import React from 'react';
import Tracklist from '../TrackList/TrackList';
import { TrackProvider } from './TrackContex';
import VolumeBar from '../VolumeBar/VolumeBar';
import TimerBar from '../TimerBar/TimerBar';

const PlayerBar = () => {
  const {
    isPlaying,
    pause,
    play,
    next,
    setNext,
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

  const track = useMemo(() => {
    const trackData = trackList[currentTrackIndex];
    return trackData
      ? {
          title: trackData.title,
          artist: trackData.artist,
          artwork: trackData.img,
          next: !isNextDisabled,
          prev: !isPrevDisabled,
        }
      : { title: '', artist: '', artwork: [], next: false, prev: false };
  }, [currentTrackIndex, isNextDisabled, isPrevDisabled]);

  useMediaSession({
    track,
    onPlay: play,
    onPause: pause,
    onPreviousTrack: prev,
    onNextTrack: next,
  });

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
      </div>

      <div className={styles.controls_container}>
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
          <TimerBar currentTrackDuration={currentTrackDuration} duration={trackDuration} />
          <ProgressBar currentTime={currentTrackDuration} duration={trackDuration} onSeek={handleSeek} />
        </div>
        <VolumeBar currentVolume={currentVolume} adjustVolume={adjustVolume} />
      </div>
      <TrackProvider
        trackList={trackList}
        play={play}
        pause={pause}
        next={setNext}
        state={isPlaying}
        currentIndex={currentTrackIndex}
      >
        <Tracklist />
      </TrackProvider>
    </div>
  );
};

export default PlayerBar;
