import { useEffect, useState } from 'react';
import styles from './Player.module.scss';

const trackList = ['Share The Love.mp3', 'Alright.mp3'];

const Player = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrackName, setCurrentTrackName] = useState('Звук Бизнес');
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackDuration, setTrackDuration] = useState(0);

  useEffect(() => {
    const audioElement = new Audio();
    audioElement.preload = 'none';
    audioElement.src = `/Tracks/${trackList[currentTrackIndex]}`;
    setCurrentTrackName(() => {
      const regex = /(.mp3)$/gm;
      return trackList[currentTrackIndex].replace(regex, '');
    });

    audioElement.load();

    const updateDuration = () => {
      const duration = Number(audioElement.duration.toFixed(2));
      setTrackDuration(duration);
    };

    const updateTime = () => {
      const trackCurrentTime = Number(audioElement.currentTime.toFixed(0));
      setCurrentTime(trackCurrentTime);
    };

    audioElement.addEventListener('timeupdate', updateTime);
    audioElement.addEventListener('loadedmetadata', updateDuration);
    audioElement.addEventListener('ended', handleNext);

    setAudio(audioElement);

    return () => {
      audioElement.removeEventListener('timeupdate', updateTime);
      audioElement.removeEventListener('loadedmetadata', updateDuration);
      audioElement.removeEventListener('ended', handleNext);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audio) {
      audio.src = `/Tracks/${trackList[currentTrackIndex]}`;
      audio.load();
    }
  }, [currentTrackIndex, audio]);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, audio]);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex < trackList.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : trackList.length - 1));
  };

  const handleSliderChange = (event) => {
    if (audio) {
      const newTime = Number(event.target.value);
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className={styles.container}>
      <span>{currentTrackName}</span>
      <span>{currentTime}</span>
      <div className={styles.player_navigation}>
        <button className={styles.player_button} onClick={handlePrev}>
          Prev
        </button>
        <button className={styles.player_button} onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button className={styles.player_button} onClick={handleNext}>
          Next
        </button>
      </div>
      <div className={styles.player_info}>
        <input type="range" min="0" max={trackDuration} value={currentTime} onChange={handleSliderChange} />
      </div>
    </div>
  );
};

export default Player;
